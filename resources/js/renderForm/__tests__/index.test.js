import RenderForm from '../index';

// mock
import component from '../__mocks__/component';
import fieldData from '../__mocks__/field';

jest.mock('../utils/request/get', () => 
  jest.fn(() => Promise.resolve(fieldData))
);

describe('Render Form', () => {
  const renderForm = new RenderForm();

  beforeEach(() => {
    document.body.innerHTML = component;

    jest.spyOn(renderForm, 'init');

    renderForm.register('[data-order-form]');
  });

  test('Should call the init', () => {
    expect(renderForm.init).toHaveBeenCalled();
  });
});