class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
        <style>
			      p {
				        color:red
			      }
            body{
                color:red
            }
        </style>
        <slot><p>Test</p></slot>
      `;
  }
}

customElements.define('my-element', MyElement);

class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
        <style>
          /* scoped styles */
            body{
                color:red
            }
        </style>
      `;
  }
}

customElements.define('my-button', MyButton);
