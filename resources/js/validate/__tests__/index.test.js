import Validate from '../index';

// mocks
import component from '../__mocks__/component';

describe('Validate', () => {
  const validate = new Validate();

  beforeAll(() => {
    document.body.innerHTML = component;
    const elem = document.querySelector('[data-order-form]');
    validate.init(elem);
    jest.spyOn(validate, 'handleButton');
  });

  afterAll(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('Should call handleButton', () => {
    expect(validate.handleButton).toHaveBeenCalled();
  });
});