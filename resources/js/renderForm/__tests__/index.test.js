import RenderForm from '../index';

// mock
import component from '../__mocks__/component';
import mockField from '../__mocks__/field';

jest.mock('../../utils/request/get', () => 
  jest.fn(() => Promise.resolve(mockField))
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

  test('Should create element select', () => {
    const container = document.createElement('div');
    const enumerable = {
      type: 'enumerable',
      required: true,
      name: 'test',
      values: {
        'option': 'option'
      },
      label: 'Test'
    }

    container.innerHTML = renderForm.createElement(enumerable);

    expect(container.querySelector('select').required).toBe(enumerable.required);
    expect(container.querySelector('select').name).toBe(enumerable.name);
    expect(container.querySelector('select').options[0].innerHTML).toEqual(enumerable.values.option);
    expect(container.querySelector('label').innerHTML).toBe(enumerable.label);
  });

  test('Should create element big_text', () => {
    const container = document.createElement('div');
    const enumerable = {
      type: 'big_text',
      required: true,
      name: 'test',
      label: 'Test',
      placeholder: 'test',
    }

    container.innerHTML = renderForm.createElement(enumerable);

    expect(container.querySelector('textarea').required).toBe(enumerable.required);
    expect(container.querySelector('textarea').name).toBe(enumerable.name);
    expect(container.querySelector('textarea').placeholder).toBe(enumerable.placeholder);
    expect(container.querySelector('label').innerHTML).toBe(enumerable.label);
  });

  test('Should create element button', () => {
    const container = document.createElement('div');
    const enumerable = {
      name: 'test',
      type: 'button',
      dataset: ['data-submit'],
    }

    container.innerHTML = renderForm.createElement(enumerable);

    expect(container.querySelector('button').innerHTML).toBe(enumerable.name);
    expect(container.querySelector('button').dataset).toBeTruthy();
  });

  test('Should create element input', () => {
    const container = document.createElement('div');
    const enumerable = {
      name: 'input',
      type: 'input',
      dataset: ['data-submit'],
      name: 'test',
      placeholder: 'test',
      required: true,
      label: 'test',
    }

    container.innerHTML = renderForm.createElement(enumerable);

    expect(container.querySelector('input').name).toBe(enumerable.name);
    expect(container.querySelector('input').placeholder).toBe(enumerable.placeholder);
    expect(container.querySelector('input').required).toBe(enumerable.required);
    expect(container.querySelector('label').innerHTML).toBe(enumerable.label);
  });
});