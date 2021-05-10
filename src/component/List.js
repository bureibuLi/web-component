/**
 * 创建template，以加载html dom、css style、script
 */
const template = document.createElement('template');
template.innerHTML = `
  <ul/>
  <style>
    ul li{
      list-style: none;
    }
  </style>
`;

/**
 * @class Base
 * @extends HTMLElement
 */
class Base extends HTMLElement {
  /**
   * 构造方法
   */
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({mode: 'open'});
    // clone template,template only render once,if you want to render more than one time,try cloneNode.
    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this.$ul = this._shadowRoot.querySelector('ul');
  }
  /**
   * getter hook, 获取option时会自动调用此方法
   */
  get option() {
    return this.getAttribute('option');
  }
  /**
   * setter hook, 修改option时会自动调用此方法
   * @param {any} value
   */
  set option(value) {
    this.setAttribute('option', value);
  }
  /**
   * watch, 用来规定白名单的方法，一旦该属性发生改变会触发attributeChangedCallback()
   */
  static get observedAttributes() {
    return ['option'];
  }
  /**
   * 用于外部传入的属性
   * @param {any} name
   * @param {any} oldVal
   * @param {any} newVal
   */
  attributeChangedCallback(name, oldVal, newVal) {
    this.render();
  }
  /**
   * 渲染
   */
  render() {
    if (this.option) {
      const option = JSON.parse(this.option);
      option.forEach((item)=>{
        const li = document.createElement('li');
        li.innerHTML = item;
        this.$ul.appendChild(li);
      });
    }
  }
}
customElements.define('list-element', Base);


