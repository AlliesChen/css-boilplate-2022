export class NoMarginBlock extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        ::slotted(*) {
          margin: 0;
        }
      </style>
      <slot></slot>
    `
  }
}