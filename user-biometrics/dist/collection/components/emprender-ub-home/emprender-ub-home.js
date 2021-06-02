import { Component, Host, h, getAssetPath } from '@stencil/core';
export class EmprenderUbHome {
  render() {
    return (h(Host, null,
      h("section", { class: "validation" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col col-lg-6 col-md-8" },
              h("h2", { class: "title" }, "Queremos conocerte"),
              h("span", { class: "img" },
                h("img", { src: getAssetPath("./assets/img/illustration6.svg") })),
              h("h4", null, "Ahora validaremos tu identidad"),
              h("emprender-cl-button", { text: "Continua aqu\u00ED", modifiers: "medium primary", onclick: () => console.log('User Validation') }),
              h("div", { class: "row" },
                h("div", { class: "col-6" },
                  h("div", { class: "item" },
                    h("span", { class: "img" },
                      h("img", { src: getAssetPath("./assets/img/illustration7.svg") })),
                    h("h5", null, "Ten a mano tu c\u00E9dula."),
                    h("p", null, "Necesitamos que tu documento est\u00E9 en buenas condiciones para el registro de ambas caras."))),
                h("div", { class: "col-6" },
                  h("div", { class: "item" },
                    h("span", { class: "img" },
                      h("img", { src: getAssetPath("./assets/img/illustration8.svg") })),
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
}
