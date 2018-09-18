export default class Validate {
  handleMessage(field) {
    const warningMessage = field.nextElementSibling; 
    warningMessage.innerHTML = 'Esse Campo não pode ficar em branco'; 
    field.addEventListener('keydown', e => {
      warningMessage.innerHTML = '';  
    });
  }

  isWhitesFields(fields) {
    let res = false;
    fields.forEach(field => {
      if (!field.value) {
        res = true;
        this.handleMessage(field);
      }
    });
    return res;
  }

  nextStep() {
    this.containers.forEach(el => { 
      el.classList.contains('is-hidden')
        ? el.classList.remove('is-hidden')
        : el.classList.add('is-hidden');
    });
  }

  handleButton(container) {
    const button = container.querySelector('[data-submit]');
    const fields = container.querySelectorAll('[required="true"]');
    button.onclick = (e) => {
      e.preventDefault();
      const whiteFields = this.isWhitesFields(fields);
      if (button.dataset.next !== undefined && !whiteFields) {
        this.nextStep();
      }
    }
  }

  init(elem) {
    this.containers = elem.querySelectorAll('[data-validate-container]');
    this.containers.forEach(container => {
      this.handleButton(container);
    });
  }
}