export class TableOfContents extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `
        <style>
            :host {
            position: fixed;
            top: 1rem;
            left: 1rem;
            width: 10rem;
            height: 2.5rem;
            overflow: hidden;
            padding-inline: 0.5rem;
            padding-block: 0.5rem;
            background-color: rgba(180, 180, 180, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 0.25rem;
            }
            :host(:hover) {
                height: fit-content;
            }
            ol {
            font-size: 0.75rem;
            padding-left: 0.75rem;
            }
            ol > li {
                margin: 0;
            }
            span {
                font-size: 0.9rem;
                font-weight: bold;
            }
        </style>
        <span>Table of Contents</span>
        <ol>
            <li><a href="#title">Title</a></li>
            <slot></slot>
        </ol>
        `
    }
}