export class EnhancedLink extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        :host {
          text-underline-position: under;
        text-decoration-thickness: from-font;
        }
      </style>
      <a>
        <slot></slot>
      </a>
    `
    const href = shadowRoot.host.getAttribute("href")
    const anchor = shadowRoot.querySelector("a");
    anchor.setAttribute("href", href);
  }
}