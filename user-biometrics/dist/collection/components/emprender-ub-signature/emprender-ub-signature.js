import { Component, Host, h, getAssetPath, Event } from '@stencil/core';
import state from '../../store/user-biometrics.store';
export class EmprenderUbHome {
  requestToADO() {
    if (state.adoCofiguration) {
      const { url, redirectUrl, key, projectName, product, documentType, documentNumber } = state.adoCofiguration;
      const _redirect = redirectUrl !== null && redirectUrl !== void 0 ? redirectUrl : location.href;
      const adoURL = `${url}?callback=${_redirect}&key=${key}&projectName=${projectName}&product=${product}&documentType=${documentType}&identificationNumber=${documentNumber}`;
      window.location.assign(adoURL);
    }
  }
  render() {
    return (h(Host, null,
      h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "Registra tu firma electr\u00F3nica en el pagar\u00E9"),
              h("span", { class: "img mb20" },
                h("img", { src: getAssetPath('./assets/img/illustration16.svg') })),
              h("h4", null, "Para eso vamos a validar tu identidad"),
              h("emprender-cl-button", { text: "Firma aqu\u00ED", modifiers: "medium primary", onclick: () => this.requestToADO() })))))));
  }
  static get is() { return "emprender-ub-signature"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-ub-signature.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-ub-signature.css"]
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
