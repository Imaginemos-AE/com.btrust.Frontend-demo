import { Component, Host, h, Element, Prop } from '@stencil/core';
export class EmprenderCsSlider {
  constructor() {
    this.value = null;
  }
  componentDidLoad() {
    if (this.slider)
      this.slider.destroy();
    const element = this.host.shadowRoot.querySelector(".slider");
    this.slider = $(element).slider({
      tooltip: 'always',
      tooltip_position: 'bottom'
    }).on('change', event => { this.value = event.value.newValue; });
  }
  render() {
    var _a, _b;
    return (h(Host, null,
      h("fieldset", { class: "divslider" },
        h("label", null, this.label),
        h("input", { class: "slider", "data-slider-id": 'slider', type: "text", "data-slider-min": this.min, "data-slider-max": this.max, "data-slider-step": this.step, "data-slider-value": this.value }),
        h("span", { class: "ticksLabels left" }, (_a = this.minLabel) !== null && _a !== void 0 ? _a : this.min),
        h("span", { class: "ticksLabels right" }, (_b = this.maxLabel) !== null && _b !== void 0 ? _b : this.max))));
  }
  static get is() { return "emprender-cs-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cs-slider.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cs-slider.css"]
  }; }
  static get properties() { return {
    "value": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "null"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false
    },
    "min": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "min",
      "reflect": false
    },
    "minLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "min-label",
      "reflect": false
    },
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max",
      "reflect": false
    },
    "maxLabel": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "max-label",
      "reflect": false
    },
    "step": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "step",
      "reflect": false
    }
  }; }
  static get elementRef() { return "host"; }
}
