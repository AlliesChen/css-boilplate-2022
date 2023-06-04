export class PlainMenu extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        menu {
          list-style: none;
          padding-left: 0;
        }
      </style>
      <menu>
        <slot></slot>
      </menu>
    `
  }
}