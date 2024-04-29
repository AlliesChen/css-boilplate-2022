import { NoMarginBlock } from "./components/NoMarginBlock.js";
import { ContentBox } from "./components/ContentBox.js";
import { BorderHandler } from "./components/BorderHandler.js";
import { ImageBlock } from "./components/ImageBlock.js"
import { PlainOList } from "./components/PlainOList.js";
import { PlainUList } from "./components/PlainUList.js";
import { PlainMenu } from "./components/PlainMenu.js";
import { EnhancedLink } from "./components/EnhancedLink.js";
import { EventForm } from "./components/EventForm.js";
import { TableOfContents } from "./components/TableOfContents.js";

customElements.define("no-margin-block", NoMarginBlock);
customElements.define("content-box", ContentBox);
customElements.define("border-handler", BorderHandler);
customElements.define("image-block", ImageBlock);
customElements.define("plain-o-list", PlainOList);
customElements.define("plain-u-list", PlainUList);
customElements.define("plain-menu", PlainMenu);
customElements.define("enhanced-link", EnhancedLink);
customElements.define("event-form", EventForm);
customElements.define("table-of-contents", TableOfContents);

window.addEventListener('load', () => {
  const scrollBehaviorSwitch = document.querySelector('#switch');

  scrollBehaviorSwitch.addEventListener("change", () => {
    const isChecked = scrollBehaviorSwitch.checked;
    const html = document.querySelector('html');

    html.style.scrollBehavior = isChecked ? 'smooth' : 'auto';
  });
})
