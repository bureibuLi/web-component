/**
 * @class Base
 * @extends HTMLElement
 */
class Base extends HTMLElement {
  /**
   * 构造
   */
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <ul>
        <li class="li-1">Coffee</li>
        <li class="li-2">Milk</li>
      </ul>
      <style>
        .li-1 {
          color: red;
        }
        .li-2 {
          color: aqua;
        }
      </style>`;
  }
}
customElements.define('list-element', Base);


