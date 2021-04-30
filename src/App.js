class MyElement extends HTMLElement {
  constructor() {
    super();

    this.shadowRoot.innerHTML = `
      <style>
        /* scoped styles */
      </style>
      <slot></slot>
    `;
  }
}

/**
 * 装载App组件
 */
const element = document.getElementById('root');
const App = document.createElement('App');
element.appendChild(App);
