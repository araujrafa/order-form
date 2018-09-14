import get from '../utils/request/get';
import Validate from '../validate';

export default class RenderForm {
  constructor() {
    this.validate = new Validate();
  }

  createElement(elem) {
    const labelElement = `<label>${elem.label || ''}</label>`;
    switch (elem.type) {
      case 'enumerable': {
        return `
        ${labelElement}
        <select required=${elem.required} name=${elem.name}>
          ${Object.values(elem.values)
            .map(val => {
              return `<option value="${val}">${val}</option>`;
            })
            .join('')}
        </select>
        <span></span>
      `;
      }
      case 'big_text': {
        return `
        ${labelElement}
        <textarea placeholder=${elem.placeholder} name=${elem.name}></textarea>
      `;
      }
      case 'button': {
        return `
          <button ${elem.dataset.map(el => el).join(' ')}>${elem.name}</button>
        `
      }
      default: {
        return `
          ${labelElement}
          <input type='${elem.type === 'email' ? elem.type : 'text'}'
            name='${elem.name}'
            required='${elem.required}'
            placeholder='${elem.placeholder}'
          />
        `;
      }
    }
  }

  fillContent(elem) {
    const content = Object.getOwnPropertyNames(this.data._embedded)
      .map((prop, i) => {
        const first = (i === 0);
        return `
          <fieldset data-validate-container class='${!first ? 'is-hidden' : ''}'>
            ${this.data._embedded[prop]
              .map(data => `<div>${this.createElement({ ...data })}</div>`).join('')
            }
            ${first
              ? this.createElement({ type: 'button', dataset: ['data-next', 'data-submit'], name: 'Proximo' })
              : this.createElement({ type: 'button', dataset: ['data-submit'], name: 'Enviar' })}
          </fieldset>`;
      })
      .join('');

    elem.innerHTML = content;
  }

  tabs(elem) {
    const next = elem.querySelector('[data-next]');

    next.addEventListener('click', (e) => {
      e.preventDefault();
      elem.querySelectorAll('fieldset')
        .forEach(el => {
          el.classList.contains('is-hidden')
            ? el.classList.remove('is-hidden')
            : el.classList.add('is-hidden');
        });
    });
  }

  init(elem) {
    get('/api/fields.json')
      .then(data => {
        this.data = JSON.parse(data);
        this.fillContent(elem);
        this.tabs(elem);
        this.validate.init(elem);
      });
  }

  register(elem) {
    document.querySelectorAll(elem).forEach(el => {
      this.init(el);
    });
  }
}