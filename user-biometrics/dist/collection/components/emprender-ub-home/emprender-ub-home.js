import { Component, Host, h, getAssetPath, Event } from '@stencil/core';
import state from '../../store/user-biometrics.store';
export class EmprenderUbHome {
  requestToADO() {
    if (state.adoCofiguration) {
      const { url, redirectUrl, key, projectName, product } = state.adoCofiguration;
      const _redirect = redirectUrl !== null && redirectUrl !== void 0 ? redirectUrl : location.href;
      const adoURL = `${url}?callback=${_redirect}&key=${key}&projectName=${projectName}&product=${product}`;
      window.location.assign(adoURL);
    }
  }
  detectDevice() {
    var ua = navigator.userAgent;
    var isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(ua);
    return isMobile;
  }
  getInformationItem() {
    let item;
    if (this.detectDevice()) {
      item = (h("div", { class: "item" },
        h("span", { class: "img" },
          h("img", { src: getAssetPath('./assets/img/illustration7.svg') })),
        h("h5", null, "Ten a mano tu c\u00E9dula."),
        h("p", null, "Necesitamos que tu documento est\u00E9 en buenas condiciones para el registro de ambas caras.")));
    }
    else {
      item = (h("div", { class: "item" },
        h("span", { class: "img" },
          h("img", { src: getAssetPath('./assets/img/illustration12.svg') })),
        h("h6", null, "Ten a mano el archivo de tu c\u00E9dula escaneada por ambos lados y en formato de imagen: png, jpeg o jpg.")));
    }
    return item;
  }
  render() {
    return (h(Host, null,
      h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "Ahora validaremos tu identidad"),
              h("span", { class: "img" },
                h("img", { src: getAssetPath('./assets/img/illustration6.svg') })),
              h("emprender-cl-button", { text: "Continua aqu\u00ED", modifiers: "medium primary", onclick: () => this.requestToADO() }),
              h("div", { class: "row" },
                h("div", { class: "col-6" }, this.getInformationItem()),
                h("div", { class: "col-6" },
                  h("div", { class: "item" },
                    h("span", { class: "img" },
                      h("img", { src: getAssetPath('./assets/img/illustration8.svg') })),
                    h("h5", null, "Prep\u00E1rate para tomarte una foto y ub\u00EDcate en condiciones \u00F3ptimas de luz."))))))))));
  }
  static get is() { return "emprender-ub-home"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-ub-home.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-ub-home.css"]
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
