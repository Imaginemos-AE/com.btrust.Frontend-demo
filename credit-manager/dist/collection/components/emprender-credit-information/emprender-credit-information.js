import { Component, Prop, Host, h } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
import { requestPayment } from '../../service/paymentGateway';
export class EmprenderUserBiometrics {
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  render() {
    return (h(Host, null,
      h("h3", { class: "colorTertiary" }, "Informaci\u00F3n de Cr\u00E9dito Activo"),
      h("div", { class: "details" },
        h("div", { class: "item" },
          h("label", null, "Monto desembolsado:"),
          h("p", { class: "value" }, "$380.000")),
        h("div", { class: "item" },
          h("label", null, "Plazo:"),
          h("p", { class: "value" }, "12 meses")),
        h("div", { class: "item" },
          h("label", null, "Valor total a pagar"),
          h("p", { class: "value" }, "$ 389.594")),
        h("div", { class: "item" },
          h("label", null, "Valor cuota pactada"),
          h("p", { class: "value" }, "$ 23.500")),
        h("div", { class: "item" },
          h("label", null, "Fecha pr\u00F3ximo pago programado"),
          h("p", { class: "value" }, "03/11/2021"))),
      h("ul", { class: "buttons" },
        h("li", null,
          h("emprender-cl-button", { text: "Pagar Cuota", modifiers: "medium primary", onclick: () => requestPayment() })),
        h("li", null,
          h("emprender-cl-button", { text: "Pagar Valor Total", modifiers: "medium secondary", onclick: () => requestPayment() })),
        h("li", null,
          h("div", { class: "downloadPDF w150" },
            h("span", { class: "text" }, "Descargar PDF"),
            h("span", { class: "icon" },
              " ",
              h("emprender-cl-icon", { icon: "pdf", path: 3 }),
              "  "))))));
  }
  static get is() { return "emprender-credit-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-credit-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-credit-information.css"]
  }; }
  static get properties() { return {
    "userDocumentId": {
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
      "attribute": "user-document-id",
      "reflect": false
    }
  }; }
}
