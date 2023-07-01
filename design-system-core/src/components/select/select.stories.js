import { html } from "lit";
import "./index.js";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Select",
};

export const Select = ({
  name,
  value,
  label,
  placeholder,
  helperText,
  required,
  disabled,
  error,
}) => {
  function _handleFocus() {
    action("dscFocus")({ value: "Focus event" });
  }

  function _handleBlur() {
    action("dscBlur")({ value: "Blur event" });
  }

  function _handleChange(e) {
    action("dscChange")({ value: e.detail.value });
  }

  return html`
    <dsc-select
      id="input-text-id"
      .name="${name}"
      .value="${value}"
      .label="${label}"
      .placeholder="${placeholder}"
      .helperText="${helperText}"
      ?required="${required}"
      ?disabled="${disabled}"
      ?error="${error}"
      @dscFocus="${_handleFocus}"
      @dscBlur="${_handleBlur}"
      @dscChange="${(event) => _handleChange(event)}"
    >
      <option value="1">Label 1</option>
      <option value="2">Label 2</option>
      <option value="3">Label 3</option>
      <option value="4">Label 4</option>
      <option value="5">Label 5</option>
      <option value="6">Label 6</option>
    </dsc-select>
  `;
};

Select.args = {
  value: "",
  label: "Label",
  placeholder: "Input text",
  helperText: "Helper text",
  required: true,
  disabled: false,
  error: false,
};
