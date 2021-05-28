import { Component, Host, h, Element, Prop, Event, Method } from '@stencil/core';
export class EmprenderCsSlider {
  constructor() {
    this.refreshSlider = false;
    this.value = null;
  }
  async updateBoundaries(min, max, step, minLabel, maxLabel) {
    if (this.slider) {
      [this.min, this.max, this.minLabel, this.maxLabel, this.step] = [min, max, minLabel, maxLabel, step];
      this.refreshSlider = true;
    }
  }
  componentDidLoad() {
    if (this.slider)
      this.slider.destroy();
    const element = this.host.shadowRoot.querySelector(".slider");
    this.slider = $(element).slider({
      tooltip: 'always',
      tooltip_position: 'bottom',
      formatter: this.formatter
    }).on('change', event => {
      this.value = event.value.newValue;
      this.emitChange();
    });
  }
  componentDidRender() {
    if (this.refreshSlider) {
      this.refreshSlider = false;
      this.slider.slider('setAttribute', 'min', this.min);
      this.slider.slider('setAttribute', 'max', this.max);
      this.slider.slider('setAttribute', 'step', this.step);
      this.slider.slider('refresh', { useCurrentValue: true });
    }
  }
  emitChange() {
    this.sliderChange.emit(Object.assign({ value: this.value }, (this.formatter && { formatedValue: this.formatter(this.value) })));
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
      "attribute": "min",
      "reflect": true
    },
    "minLabel": {
      "type": "string",
      "mutable": true,
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
      "reflect": true
    },
    "max": {
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
      "attribute": "max",
      "reflect": true
    },
    "maxLabel": {
      "type": "string",
      "mutable": true,
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
      "reflect": true
    },
    "step": {
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
      "attribute": "step",
      "reflect": true
    },
    "formatter": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "(value: number) => string",
        "resolved": "(value: number) => string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get events() { return [{
      "method": "sliderChange",
      "name": "sliderChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "{ value: number, formatedValue?: string }",
        "resolved": "{ value: number; formatedValue?: string; }",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "updateBoundaries": {
      "complexType": {
        "signature": "(min: number, max: number, step: number, minLabel: string, maxLabel: string) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "host"; }
}
