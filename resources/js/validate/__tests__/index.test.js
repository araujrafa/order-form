import Validate from '../index';

// mocks
import component from '../__mocks__/component';

describe('Validate', () => {
  const validate = new Validate();

  beforeEach(() => {
    document.body.innerHTML = component;
    const elem = document.querySelector('[data-order-form]');
    validate.init(elem);
    jest.spyOn(validate, 'nextStep');
    jest.spyOn(validate, 'handleMessage');
  });

  afterAll(() => {
    jest.restoreAllMocks();
    document.body.innerHTML = '';
  });

  it('Should call nextStep', () => {
    const button = document.querySelector('[data-submit]');
    button.click();

    expect(validate.nextStep).toHaveBeenCalled();
  });

  it('Should call handleMessage and dont found value', () => {
    const fields = document.querySelectorAll('[required="true"]');
    const test = validate.isWhitesFields(fields);

    expect(validate.handleMessage).toHaveBeenCalled();
    expect(test).toBe(true);
  });

  it('Should add message error', () => {
    const field = document.querySelector('[required="true"]');
    const span = field.nextElementSibling;
    const event = document.createEvent("HTMLEvents");
    event.initEvent('keydown');
    validate.handleMessage(field, false, true);

    expect(span.innerHTML).toBe('Esse Campo não pode ficar em branco')
    
    field.dispatchEvent(event);

    expect(span.innerHTML).toBe('');
  });
});