export class PlainUList extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding-left: 0;
        }
      </style>
      <ul>
        <slot></slot>
      </ul>
    `
  }
}