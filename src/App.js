import './component/List';

/**
 * 创建template，以加载html dom、css style、script
 */
const template = document.createElement('template');
template.innerHTML = `
  <div class="container">
    <list-element style="" class="list-container" option='[ "Home", "Component", "Help" ]'/>
  </div>
  <style>
    .container{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100vw;
      height: 100vh;
    }
    .list-container{
      width: 20%;
      height: 100%;
      border-right: white 4px solid;
      background: black;
    }
  </style>
`;

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
    this._shadowRoot = this.attachShadow({mode: 'open'});
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('app-element', Base);

/**
 * 装载App组件
 */
const element = document.getElementById('root');
const appElement = document.createElement('app-element');
element.appendChild(appElement);
