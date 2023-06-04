export class ContentBox extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host {
          font-weight: 100;
        }
        ::slotted(*) {
          width: 100%;
          padding-inline: 0.5rem;
          padding-block: 0.25rem;
          border: 0.25rem solid #AAAE8E;
          border-radius: 0.25rem;
        }
      </style>
      The width of the container is 100% of its parent element
      <slot></slot>
    `
  }
}