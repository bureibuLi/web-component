class MyElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow( { mode: 'open' } );
      this.shadowRoot.innerHTML = `
        <style>
          /* scoped styles */
            body{
                color:red
            }
			      p {
				      color:red
			      }
        </style>
        <slot><p>123123</p></slot>
      `;
    }
    static get observedAttributes() {
      // Return list of attributes to watch.
    }
    attributeChangedCallback( name, oldValue, newValue ) {
      // Run functionality when one of these attributes is changed.
    }
    connectedCallback() {
      // Run functionality when an instance of this element is inserted into the DOM.
    }
    disconnectedCallback() {
      // Run functionality when an instance of this element is removed from the DOM.
    }
}
customElements.define('my-element', MyElement);

class MyButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow( { mode: 'open' } );
      this.shadowRoot.innerHTML = `
        <style>
          /* scoped styles */
            body{
                color:red
            }
        </style>
        <slot></slot>
      `;
    }
    static get observedAttributes() {
      // Return list of attributes to watch.
    }
    attributeChangedCallback( name, oldValue, newValue ) {
      // Run functionality when one of these attributes is changed.
    }
    connectedCallback() {
      // Run functionality when an instance of this element is inserted into the DOM.
    }
    disconnectedCallback() {
      // Run functionality when an instance of this element is removed from the DOM.
    }
}
customElements.define('my-button', MyButton);
