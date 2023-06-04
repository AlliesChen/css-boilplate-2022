export class ImageBlock extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>
        #image {
          display: block;
          max-width: 100%;
          border-radius: 0.25rem;
        }
      </style>
      <img id="image" src="">
    `
    const image = shadowRoot.getElementById("image");
    const src = shadowRoot.host.getAttribute("src");
    image.setAttribute("src", src);
  }
}