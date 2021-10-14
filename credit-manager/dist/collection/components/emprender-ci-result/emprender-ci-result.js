import { Component, Prop, Host, h, getAssetPath, Event } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
export class EmprenderUserBiometrics {
  constructor() {
    this.status = 'initial';
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  _renderStatus() {
    switch (this.status) {
      case 'initial':
      case 'approved':
        return this._renderAppoved();
      case 'rejected':
        return this._renderRejected();
    }
  }
  _renderAppoved() {
    console.log('aja');
    return (h("section", { class: "validation" },
      h("div", { class: "container" },
        h("div", { class: "row justify-content-center" },
          h("div", { class: "col col-lg-6 col-md-8" },
            h("h2", { class: "title" }, "\u00A1Todo sali\u00F3 bien!"),
            h("span", { class: "img" },
              h("img", { src: getAssetPath('./assets/img/illustration9.svg') })),
            h("h4", null, "El pago fue aprobado."),
            h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.continue.emit() }))))));
  }
  _renderRejected() {
    return (h("section", { class: "validation" },
      h("div", { class: "container" },
        h("div", { class: "row justify-content-center" },
          h("div", { class: "col col-lg-6 col-md-8" },
            h("h2", { class: "title" }, "\u00A1Parece que algo sali\u00F3 mal!"),
            h("span", { class: "img" },
              h("img", { src: getAssetPath('./assets/img/illustration25.svg') })),
            h("h4", null, "El pago no fue aprobado."),
            h("emprender-cl-button", { text: "Volver al inicio", modifiers: "medium primary", onclick: () => this.continue.emit() }))))));
  }
  render() {
    return h(Host, null, this._renderStatus());
  }
  static get is() { return "emprender-ci-result"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-ci-result.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-ci-result.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'initial' | 'approved' | 'rejected'",
        "resolved": "\"approved\" | \"initial\" | \"rejected\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "status",
      "reflect": false,
      "defaultValue": "'initial'"
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
