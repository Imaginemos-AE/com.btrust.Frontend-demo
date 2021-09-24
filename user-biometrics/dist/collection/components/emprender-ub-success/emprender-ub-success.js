import { Component, Host, h, Event, getAssetPath, Prop } from '@stencil/core';
export class EmprenderUbSuccess {
  constructor() {
    this.type = 'validate';
  }
  checkTransactionType() {
    if (this.type === 'validate') {
      return (h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "\u00A1Todo sali\u00F3 bien!"),
              h("span", { class: "img" },
                h("img", { src: getAssetPath('./assets/img/illustration9.svg') })),
              h("h4", null, "El proceso de validaci\u00F3n fue exitoso."),
              h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.continue.emit() }))))));
    }
    else {
      return (h("section", { class: "clientForms" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("div", { class: "boxNotifications" },
                h("h3", null, "Firma electr\u00F3nica correcta"),
                h("span", { class: "img mb20" },
                  h("img", { src: getAssetPath('./assets/img/illustration24.svg') })),
                h("h4", null, "Tu firma electr\u00F3nica fue registrada de manera exitosa")),
              h("ul", { class: "inline flex-center-center" },
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.continue.emit() }))))))));
    }
  }
  render() {
    return h(Host, null, this.checkTransactionType());
  }
  static get is() { return "emprender-ub-success"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-ub-success.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-ub-success.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'validate' | 'check'",
        "resolved": "\"check\" | \"validate\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'validate'"
    }
  }; }
  static get events() { return [{
      "method": "continue",
      "name": "continue",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
}
