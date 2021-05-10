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
    this.shadowRoot.innerHTML = '<list-element/>';
  }
}

customElements.define('app-element', Base);

/**
 * 装载App组件
 */
const element = document.getElementById('root');
const appElement = document.createElement('app-element');
element.appendChild(appElement);
