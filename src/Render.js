/**
 * @param {string} componentId
 * @param {string} template
 */
export default function define(componentId, template) {
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
      this.shadowRoot.innerHTML = template;
    }
  }

  customElements.define(componentId, Base);
}
