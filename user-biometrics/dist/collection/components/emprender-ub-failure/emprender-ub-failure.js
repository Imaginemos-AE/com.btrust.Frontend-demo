import { Component, Host, h, Event, getAssetPath } from '@stencil/core';
export class EmprenderUbFailure {
  render() {
    return (h(Host, null,
      h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "\u00A1Parece que algo sali\u00F3 mal!"),
              h("span", { class: "img" },
                h("img", { src: getAssetPath("./assets/img/illustration10.svg") })),
              h("h4", null, "Pronto nos comunicaremos contigo para repetir el proceso."),
              h("emprender-cl-button", { text: "Volver al inicio", modifiers: "medium primary", onclick: () => this.continue.emit() })))))));
  }
  static get is() { return "emprender-ub-failure"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-ub-failure.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-ub-failure.css"]
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
