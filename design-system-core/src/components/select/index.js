import { LitElement, html, unsafeCSS } from "lit";
import style from "./style.scss";
import { classMap } from "lit/directives/class-map.js";

export class DscSelect extends LitElement {
  static get styles() {
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      value: { type: String },
      label: { type: String },
      placeholder: { type: String },
      helperText: { type: String },
      required: { type: Boolean },
      disabled: { type: Boolean },
      error: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.id = "";
    this.name = "";
    this.value = "";
    this.label = "";
    this.placeholder = "";
    this.helperText = "";
    this.required = false;
    this.disabled = false;
    this.error = false;
  }

  firstUpdated() {
    const slot = this.shadowRoot?.querySelector("slot");
    const childNodes = slot?.assignedNodes({ flatten: true });
    Array.prototype.map?.call(childNodes, (node) => {
      if (node.nodeName === "OPTION") {
        this.shadowRoot.querySelector("select")?.appendChild(node);
      }
    });
  }

  render() {
    return html`
      <div
        class=${classMap({
          [`select`]: true,
          [`select--disabled`]: this.disabled,
          [`select--error`]: this.error,
        })}
      >
        <label for="${this.id}">${this.label}</label>
        <div class="select-wrapper">
          <select
            id="${this.id}"
            .name="${this.name}"
            .value="${this.value}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
          >
            <option value="" disabled selected hidden>
              ${this.placeholder}
            </option>
          </select>
        </div>
        <span class="select__helper-text">${this.helperText}</span>
      </div>
      <slot></slot>
    `;
  }
}

if (!customElements.get("dsc-select")) {
  customElements.define("dsc-select", DscSelect);
}
