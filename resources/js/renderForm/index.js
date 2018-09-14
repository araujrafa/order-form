export default class RenderForm {
  init(elem) {
    
  }

  register(elem) {
    document.querySelectorAll(elem)
      .forEach(el => {
        this.init(el);
      });
  }
}