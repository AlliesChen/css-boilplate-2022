import zhTW from '../zh-TW.json' assert { type: 'json' };
import enUS from '../en-US.json' assert { type: 'json' };

export class EventForm extends HTMLElement {
  constructor() {
    super();
    this.lang = 'zh-TW';
    this.t = zhTW;
  };

  render() {
    const that = this;
    const prevContent = this.shadowRoot.querySelector('section');

    if (prevContent) {
      prevContent.remove();
    };

    const content = document.createElement('section');

    content.classList.add("col__flex--1", "demo-block");
    content.innerHTML = `
      <p data-set='chooseLang'></p>
        <div>
          <input type="radio" name="lang" id="zh-TW">
          <label data-label='zh-TW' for="zh-TW"></label>
          <input type="radio" name="lang" id="en-US">
          <label data-label='en-US' for="en-US"></label>
      </div>

      <select id="select">
        <option data-option='hint' selected disabled></option>
        <option data-option='chrismas'></option>
        <option data-option='newYearsEve'></option>
        <option data-option='lunarNewYearsEve'></option>
      </select>

      <div>
        <input type="checkbox" id="confirmed">
        <label for="confirmed"></label>
      </div>

      <div>
        <input value="" type="submit">
        <button data-button='cancel'></button>
      </div>

      <details>
        <summary>交通資訊</summary>
      </details>
    `;

    const chineseSelector = content.querySelector('#zh-TW');
    const englishSelector = content.querySelector('#en-US');
    const chooseLang = content.querySelector('p[data-set="chooseLang"]');
    const twLabel = content.querySelector('label[data-label="zh-TW"]');
    const usLabel = content.querySelector('label[data-label="en-US"]');
    const eventHint = content.querySelector('option[data-option="hint"]');
    const christmas = content.querySelector('option[data-option="chrismas"]');
    const newYearsEve = content.querySelector('option[data-option="newYearsEve"]');
    const lunarNewYearsEve = content.querySelector('option[data-option="lunarNewYearsEve"]');
    const hint = content.querySelector('label[for="confirmed"]');
    const submit = content.querySelector('input[type="submit"]');
    const cancel = content.querySelector('button[data-button="cancel"]');
    const detail = content.querySelector('details');
    const summary = content.querySelector('summary');

    if (this.lang === 'zh-TW') {
      chineseSelector.setAttribute('checked', '');
      this.t = zhTW;
    };

    if (this.lang === 'en-US') {
      englishSelector.setAttribute('checked', '');
      this.t = enUS;
    }

    chooseLang.textContent = this.t.chooseLang;
    twLabel.textContent = zhTW.lang;
    usLabel.textContent = enUS.lang;
    eventHint.textContent = this.t.event;
    christmas.textContent = this.t.christmas;
    newYearsEve.textContent = this.t.newYearsEve;
    lunarNewYearsEve.textContent = this.t.lunarNewYearsEve;
    hint.textContent = this.t.hint;
    submit.value = this.t.submit;
    cancel.textContent = this.t.cancel;
    summary.textContent = this.t.traffic;
    const trafficDetail = document.createElement('p');
    trafficDetail.textContent = this.t.trafficDetail;
    detail.appendChild(trafficDetail);

    englishSelector.addEventListener("change", () => {
      that.lang = 'en-US';
      that.render();
    });
    chineseSelector.addEventListener("change", () => {
      that.lang = 'zh-TW';
      that.render();
    });

    this.shadowRoot.appendChild(content);
  };

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
      <style>     
        label,
        button,
        select,
        summary,
        [type=radio],
        [type=submit],
        [type=checkbox] {
          cursor: pointer;
        }

        .demo-block {
          display: block;
          padding-inline: 0.5rem;
          padding-block: 1rem;
          background-color: #EBEBEB;
          border-radius: 0.25rem;
        }

        .col__flex--1 {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

      </style>
      
      
    `

    this.render();
  }
}