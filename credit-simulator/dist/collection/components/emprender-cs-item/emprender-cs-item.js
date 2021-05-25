import { Component, Host, h, Prop } from '@stencil/core';
import { formatNumber } from '../../utils/utils';
export class EmprenderCsItem {
  render() {
    return (h(Host, null,
      h("div", { class: "item" },
        h("label", null,
          this.text,
          this.space && " ",
          this.subText && h("span", null,
            "(",
            this.subText,
            ")")),
        h("p", { class: "value" },
          formatNumber(this.value, true),
          h("slot", null)))));
  }
  static get is() { return "emprender-cs-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cs-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cs-item.css"]
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
      "reflect": false
    },
    "subText": {
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
      "attribute": "sub-text",
      "reflect": false
    },
    "value": {
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
      "attribute": "value",
      "reflect": false
    },
    "space": {
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
      "attribute": "space",
      "reflect": false
    }
  }; }
}
