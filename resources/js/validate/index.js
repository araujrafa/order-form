export default class Validate {
  init(elem) {
    const containers = elem.querySelectorAll('[data-validate-container]');
    containers.forEach(container => {
      // const requireds = container.querySelectorAll('[required="true"]');
    });
  }
}