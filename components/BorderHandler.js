export class BorderHandler extends HTMLElement {
  constructor() {
    super();
    this._border = false;
  };

  static get observedAttributes() {
    return ["border"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._border = true;
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        ::slotted(*) {
          border-width: 0px;
        }
      </style>
      <slot></slot>
    `;
    const styleSheet = shadowRoot.styleSheets[0]
    const ruleObject = styleSheet.cssRules;
    for (const [index, value] of Object.entries(ruleObject)) {
      if (value.selectorText === "::slotted(*)" && this._border) {
        styleSheet.deleteRule(index);
      }
    }
  }
}