export class PlainOList extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        ol {
          list-style: none;
          padding-left: 0;
        }
      </style>
      <ol>
        <slot></slot>
      </ol>
    `
  }
}