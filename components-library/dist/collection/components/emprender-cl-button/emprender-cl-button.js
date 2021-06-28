import { Component, Host, h, Prop } from '@stencil/core';
export class EmprenderClButton {
  render() {
    var _a;
    return (h(Host, null,
      h("button", { class: `button ${(_a = this.modifiers) !== null && _a !== void 0 ? _a : ''}`, style: this.buttonStyle }, this.text)));
  }
  static get is() { return "emprender-cl-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cl-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cl-button.css"]
  }; }
  static get properties() { return {
    "text": {
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
      "attribute": "text",
      "reflect": true
    },
    "modifiers": {
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
      "attribute": "modifiers",
      "reflect": true
    },
    "buttonStyle": {
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
      "attribute": "button-style",
      "reflect": true
    }
  }; }
}
