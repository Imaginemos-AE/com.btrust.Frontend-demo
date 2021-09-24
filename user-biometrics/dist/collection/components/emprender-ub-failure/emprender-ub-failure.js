import { Component, Host, h, Event, getAssetPath, Prop } from '@stencil/core';
export class EmprenderUbFailure {
  constructor() {
    this.type = 'validate';
  }
  checkTransactionType() {
    if (this.type === 'validate') {
      return (h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "\u00A1Parece que algo sali\u00F3 mal!"),
              h("span", { class: "img" },
                h("img", { src: getAssetPath('./assets/img/illustration10.svg') })),
              h("h4", null, "Pronto nos comunicaremos contigo para repetir el proceso."),
              h("emprender-cl-button", { text: "Volver al inicio", modifiers: "medium primary", onclick: () => this.continue.emit() }))))));
    }
    else {
      return (h("section", { class: "clientForms" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("div", { class: "boxNotifications" },
                h("h3", null, "Algo sucedio con tu firma electr\u00F3nica"),
                h("span", { class: "img mb20" },
                  h("img", { src: getAssetPath('./assets/img/illustration25.svg') })),
                h("h4", null, "Ha ocurrido un error y tu firma electr\u00F3nica no fue registrada")),
              h("ul", { class: "inline flex-center-center" },
                h("li", null,
                  h("emprender-cl-button", { text: "Volver a intentarlo", modifiers: "medium primary", onclick: () => this.continue.emit() }))))))));
    }
  }
  render() {
    return (h(Host, null, this.checkTransactionType()));
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
