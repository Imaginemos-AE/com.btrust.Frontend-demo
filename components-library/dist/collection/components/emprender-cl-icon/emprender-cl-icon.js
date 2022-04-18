import { Component, Host, h, Prop, Element } from '@stencil/core';
import { appendComponentStyles } from '../../utils/utils';
export class EmprenderClIcon {
  constructor() {
    this.path = 0;
  }
  async componentWillLoad() {
    await appendComponentStyles(this.host, ["https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/common-assets/emprender-icons.css"], true, true);
  }
  renderPaths() {
    const paths = [];
    for (let index = 0; index < this.path; index++) {
      paths.push(h("span", { class: `path${index + 1}` }));
    }
    return paths;
  }
  render() {
    return (h(Host, null,
      h("span", { class: `icon-${this.icon}` }, this.renderPaths())));
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
    },
    "path": {
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
      "attribute": "path",
      "reflect": true,
      "defaultValue": "0"
    }
  }; }
  static get elementRef() { return "host"; }
}
