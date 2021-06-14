import { Component, Host, h, Prop, Element, Event } from '@stencil/core';
export class EmprenderClSelect {
  onSelectChange() {
    this.value = this.selectInput.value;
    this.selectChange.emit(this.value);
  }
  renderOptions() {
    var _a;
    return ((_a = this.options) !== null && _a !== void 0 ? _a : []).map(option => h("option", { value: option.id, selected: option.id === this.value }, option.name));
  }
  renderSlot() {
    var _a;
    if (!this.options) {
      return Array.from((_a = this.host.querySelectorAll('option')) !== null && _a !== void 0 ? _a : []).map(option => h("option", { value: option.value, selected: option.value === this.value }, option.text));
    }
  }
  render() {
    var _a;
    return (h(Host, null,
      this.label && h("label", { htmlFor: (_a = this.selectInputOptions) === null || _a === void 0 ? void 0 : _a.id },
        this.label,
        this.requiredIndicator && h("span", { class: "req" }, "*")),
      h("select", { class: "form-control", ref: (el) => this.selectInput = el, onChange: () => this.onSelectChange() },
        h("option", { value: "", selected: !this.value, disabled: true, hidden: true }, "Selecciona"),
        this.renderOptions(),
        this.renderSlot())));
  }
  static get is() { return "emprender-cl-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cl-select.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cl-select.css"]
  }; }
  static get properties() { return {
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
    "options": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "{ name: string, id: string }[]",
        "resolved": "{ name: string; id: string; }[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    },
    "value": {
      "type": "string",
      "mutable": true,
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
      "attribute": "value",
      "reflect": true
    },
    "selectInputOptions": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "select-input-options",
      "reflect": false
    },
    "requiredIndicator": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "required-indicator",
      "reflect": false
    }
  }; }
  static get events() { return [{
      "method": "selectChange",
      "name": "selectChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get elementRef() { return "host"; }
}
