import { Component, Host, h, Prop } from '@stencil/core';
import { checkData2 } from '../../module/validation';
import { loadCSS, loadScript } from '../../utils/utils';
import { setBankInformation } from '../../server/service';
import { getDataByField } from '../../module/helper';
export class EmprenderUfReferences {
  constructor() {
    this.model = {
      bankName: '',
      accountType: '',
      accountNumber: '',
    };
    this.requiredData = '';
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    const defaultData = getDataByField('bankInformation');
    if (defaultData)
      this.model = Object.assign({}, defaultData);
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  _checkSubmitInfo() {
    const lista = checkData2(this.model, 'bankInformation');
    if (lista.length === 0) {
      setBankInformation(this.model);
    }
    this.requiredData = lista.toString();
  }
  render() {
    return (h(Host, null,
      h("fieldset", null,
        h("emprender-cl-select", { checkData: this.requiredData.indexOf('bankName') > -1, label: "Selecciona tu banco", value: this.model.bankName, onSelectChange: ev => this._setModel('bankName', ev.detail) },
          h("option", null, "BANCAMIA S.A."),
          h("option", null, "BANCO AGRARIO"),
          h("option", null, "BANCO AV VILLAS"),
          h("option", null, "BANCO BBVA COLOMBIA S.A."),
          h("option", null, "BANCO CAJA SOCIAL"),
          h("option", null, "BANCO COOPERATIVO COOPCENTRAL"),
          h("option", null, "BANCO CREDIFINANCIERA"),
          h("option", null, "BANCO DAVIVIENDA"),
          h("option", null, "BANCO DE BOGOTA"),
          h("option", null, "BANCO DE OCCIDENTE"),
          h("option", null, "BANCO FALABELLA "),
          h("option", null, "BANCO GNB SUDAMERIS"),
          h("option", null, "BANCO ITAU"),
          h("option", null, "BANCO PICHINCHA S.A."),
          h("option", null, "BANCO POPULAR"),
          h("option", null, "BANCO SANTANDER COLOMBIA"),
          h("option", null, "BANCO SERFINANZA"),
          h("option", null, "BANCOLOMBIA"),
          h("option", null, "BANCOOMEVA S.A."),
          h("option", null, "CFA COOPERATIVA FINANCIERA"),
          h("option", null, "CITIBANK "),
          h("option", null, "COLTEFINANCIERA"),
          h("option", null, "CONFIAR COOPERATIVA FINANCIERA"),
          h("option", null, "COTRAFA"),
          h("option", null, "DAVIPLATA"),
          h("option", null, "GIROS Y FINANZAS COMPA\u00D1IA DE FINANCIAMIENTO S.A."),
          h("option", null, "MOVII S.A."),
          h("option", null, "NEQUI"),
          h("option", null, "RAPPIPAY"),
          h("option", null, "SCOTIABANK COLPATRIA"))),
      h("fieldset", null,
        h("emprender-cl-select", { checkData: this.requiredData.indexOf('accountType') > -1, label: "Selecciona el tipo de cuenta", value: this.model.accountType, onSelectChange: ev => this._setModel('accountType', ev.detail) },
          h("option", null, "Ahorro"),
          h("option", null, "Corriente"))),
      h("fieldset", { class: "mb20" },
        h("emprender-cl-input", { dataType: "numerico", checkData: this.requiredData.indexOf('accountNumber') > -1, label: "Ingresa el n\u00FAmero de cuenta", value: this.model.accountNumber, onInputChange: ev => this._setModel('accountNumber', ev.detail) })),
      h("ul", { class: "inline flex-center-center" },
        h("li", null,
          h("emprender-cl-button", { text: "Enviar datos bancarios", modifiers: "medium primary", onClick: () => this._checkSubmitInfo() })))));
  }
  static get is() { return "emprender-user-bank"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-bank.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-bank.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "BankInformation",
        "resolved": "BankInformation",
        "references": {
          "BankInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{\r\n    bankName: '',\r\n    accountType: '',\r\n    accountNumber: '',\r\n  }"
    },
    "requiredData": {
      "type": "string",
      "mutable": true,
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
      "attribute": "required-data",
      "reflect": true,
      "defaultValue": "''"
    }
  }; }
}
