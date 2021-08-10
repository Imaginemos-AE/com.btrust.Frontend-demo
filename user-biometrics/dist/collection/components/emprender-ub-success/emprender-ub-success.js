import { Component, Host, h, Event, getAssetPath } from '@stencil/core';
export class EmprenderUbSuccess {
  render() {
    return (h(Host, null,
      h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "\u00A1Todo sali\u00F3 bien!"),
              h("span", { class: "img" },
                h("img", { src: getAssetPath("./assets/img/illustration9.svg") })),
              h("h4", null, "El proceso de validaci\u00F3n fue exitoso."),
              h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.continue.emit() })))))));
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
