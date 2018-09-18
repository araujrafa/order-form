import get from '../utils/request/get';
import Validate from '../validate';

export default class RenderForm {
  constructor() {
    this.validate = new Validate();
  }

  createElement(elem) {
    const labelElement = `<label class="c-form__text">${elem.label || ''}</label>`;
    const spanElement = '<span class="c-form__error" data-warning-message></span>';
    switch (elem.type) {
      case 'enumerable': {
        return `
        ${labelElement}
        <select class="c-form__select" required="${elem.required}" name="${elem.name}">
          ${Object.values(elem.values)
            .map(val => {
              return `<option value="${val}">${val}</option>`;
            })
            .join('')}
        </select>
        ${spanElement}
      `;
      }
      case 'big_text': {
        return `
        ${labelElement}
        <textarea class="c-form__area" placeholder="${elem.placeholder}" name="${elem.name}" required="${elem.required}"></textarea>
        ${spanElement}
      `;
      }
      case 'button': {
        return `
          <button class="c-form__button" ${elem.dataset.map(el => el).join(' ')}>${elem.name}</button>
        `
      }
      default: {
        return `
          ${labelElement}
          <input type='${elem.type === 'email' ? elem.type : 'text'}'
            class="c-form__input"
            name='${elem.name}'
            required='${elem.required}'
            placeholder='${elem.placeholder}'
          />
          ${spanElement}
        `;
      }
    }
  }

  fillContent(elem) {
    const content = Object.getOwnPropertyNames(this.data._embedded)
      .map((prop, i) => {
        const first = (i === 0);
        return `
          <fieldset data-validate-container class='c-form__control ${!first ? 'is-hidden' : ''}'>
            <h1 class="c-title">Explique o que você precisa <small>Peça orçamento grátis, online!</small></h1>
          
            ${this.data._embedded[prop]
              .map(data => `<div class="c-form__container">${this.createElement({ ...data })}</div>`).join('')
            }
            ${first
              ? this.createElement({ type: 'button', dataset: ['data-next', 'data-submit'], name: 'Proximo' })
              : this.createElement({ type: 'button', dataset: ['data-submit'], name: 'Enviar' })}
          </fieldset>`;
      })
      .join('');

    elem.innerHTML = content;
  }

  init(elem) {
    get('/api/fields.json')
      .then(data => {
        this.data = JSON.parse(data);
        this.fillContent(elem);
        this.validate.init(elem);
      });
  }

  register(elem) {
    document.querySelectorAll(elem).forEach(el => {
      this.init(el);
    });
  }
}