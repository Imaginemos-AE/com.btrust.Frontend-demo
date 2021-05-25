import { Component, Host, h, Prop, Element } from '@stencil/core';
import { appendComponentStyles } from '../../utils/utils';
export class EmprenderClIcon {
  async componentWillLoad() {
    await appendComponentStyles(this.host, ["https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/common-assets/emprender-icons.css"], true, true);
  }
  render() {
    return (h(Host, null,
      h("span", { class: `icon-${this.icon}` })));
  }
  static get is() { return "emprender-cl-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cl-icon.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cl-icon.css"]
  }; }
  static get properties() { return {
    "icon": {
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
      "attribute": "icon",
      "reflect": true
    }
  }; }
  static get elementRef() { return "host"; }
}
