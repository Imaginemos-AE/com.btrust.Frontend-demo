import { Component, Host, h, Prop, Event } from '@stencil/core';
export class EmprenderClInput {
  onInputChange() {
    this.value = this.textInput.value;
    this.inputChange.emit(this.value);
  }
  render() {
    var _a;
    return (h(Host, null,
      this.label && h("label", { htmlFor: (_a = this.inputOptions) === null || _a === void 0 ? void 0 : _a.id },
        this.label,
        this.requiredIndicator && h("span", { class: "req" }, "*")),
      h("input", Object.assign({ class: "text", ref: (el) => this.textInput = el }, this.inputOptions, { onInput: () => this.onInputChange() }))));
  }
  static get is() { return "emprender-cl-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cl-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cl-input.css"]
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
    "inputOptions": {
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
      "attribute": "input-options",
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
    }
  }; }
  static get events() { return [{
      "method": "inputChange",
      "name": "inputChange",
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
}
