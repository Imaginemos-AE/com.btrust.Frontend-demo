import { Component, Host, h, Prop, Event } from '@stencil/core';
import { checkData2 } from '../../module/validation';
import { loadCSS, loadScript } from '../../utils/utils';
import { setUserInformation } from '../../module/store';
import { getDataByField } from '../../module/helper';
export class EmprenderUfReferences {
  constructor() {
    this.model = {
      bankName: '',
      accountType: '',
      accountNumber: '',
    };
    this.requiredData = '';
    this.adminZone = false;
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.btrust.Frontend-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
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
      setUserInformation('bankInformation', this.model);
      this.sendBankInfo.emit(this.model);
      //this.infoSaved.emit(this.model,"");
      // setBankInformation(this.model);
      //window.location.href="https://credito.muii.com.co/zona-privada/#/credit-result";
    }
    this.requiredData = lista.toString();
  }
  _getFormStructure() {
    return (h("div", null,
      h("fieldset", null,
        h("emprender-cl-select", { checkData: this.requiredData.indexOf('bankName') > -1, label: "Selecciona tu banco", value: this.model.bankName, onSelectChange: ev => this._setModel('bankName', ev.detail) },
          h("option", { value: "bancamia s.a." }, "BANCAMIA S.A."),
          h("option", { value: "banco agrario" }, "BANCO AGRARIO"),
          h("option", { value: "banco av villas" }, "BANCO AV VILLAS"),
          h("option", { value: "banco bbva colombia s.a." }, "BANCO BBVA COLOMBIA S.A."),
          h("option", { value: "banco caja social" }, "BANCO CAJA SOCIAL"),
          h("option", { value: "banco cooperativo coopcentral" }, "BANCO COOPERATIVO COOPCENTRAL"),
          h("option", { value: "banco credifinanciera" }, "BANCO CREDIFINANCIERA"),
          h("option", { value: "banco davivienda" }, "BANCO DAVIVIENDA"),
          h("option", { value: "banco de bogota" }, "BANCO DE BOGOTA"),
          h("option", { value: "banco de occidente" }, "BANCO DE OCCIDENTE"),
          h("option", { value: "banco falabella" }, "BANCO FALABELLA"),
          h("option", { value: "banco gnb sudameris" }, "BANCO GNB SUDAMERIS"),
          h("option", { value: "banco itau" }, "BANCO ITAU"),
          h("option", { value: "banco pichincha s.a." }, "BANCO PICHINCHA S.A."),
          h("option", { value: "banco popular" }, "BANCO POPULAR"),
          h("option", { value: "banco santander colombia" }, "BANCO SANTANDER COLOMBIA"),
          h("option", { value: "banco serfinanza" }, "BANCO SERFINANZA"),
          h("option", { value: "bancolombia" }, "BANCOLOMBIA"),
          h("option", { value: "bancoomeva s.a." }, "BANCOOMEVA S.A."),
          h("option", { value: "cfa cooperativa financiera" }, "CFA COOPERATIVA FINANCIERA"),
          h("option", { value: "citibank" }, "CITIBANK"),
          h("option", { value: "coltefinanciera" }, "COLTEFINANCIERA"),
          h("option", { value: "confiar cooperativa financiera" }, "CONFIAR COOPERATIVA FINANCIERA"),
          h("option", { value: "cotrafa" }, "COTRAFA"),
          h("option", { value: "daviplata" }, "DAVIPLATA"),
          h("option", { value: "giros y finanzas compa\u00F1ia de financiamiento s.a." }, "GIROS Y FINANZAS COMPA\u00D1IA DE FINANCIAMIENTO S.A."),
          h("option", { value: "movii s.a." }, "MOVII S.A."),
          h("option", { value: "nequi" }, "NEQUI"),
          h("option", { value: "rappipay" }, "RAPPIPAY"),
          h("option", { value: "scotiabank colpatria" }, "SCOTIABANK COLPATRIA"))),
      h("fieldset", null,
        h("emprender-cl-select", { checkData: this.requiredData.indexOf('accountType') > -1, label: "Selecciona el tipo de cuenta", value: this.model.accountType, onSelectChange: ev => this._setModel('accountType', ev.detail) },
          h("option", null, "Ahorro"),
          h("option", null, "Corriente"))),
      h("fieldset", { class: "mb20" },
        h("emprender-cl-input", { dataType: "numerico", checkData: this.requiredData.indexOf('accountNumber') > -1, label: "Ingresa el n\u00FAmero de cuenta", value: this.model.accountNumber, onInputChange: ev => this._setModel('accountNumber', ev.detail) }))));
  }
  render() {
    return (h(Host, null, this.adminZone ? (h("section", { class: "clientForms" },
      h("div", { class: "container" },
        h("div", { class: "row justify-content-center" },
          h("div", { class: "col" },
            !this.adminZone ? null : h("h3", { class: "titleClient" }, "Informaci\u00F3n Bancaria"),
            h("div", { class: "boxForm form p5" }, this._getFormStructure())))))) : (h("div", null,
      this._getFormStructure(),
      h("ul", { class: "inline flex-center-center" },
        h("li", null,
          h("emprender-cl-button", { text: "Enviar datos bancarios", modifiers: "medium primary", onClick: () => this._checkSubmitInfo() })))))));
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
    },
    "adminZone": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "admin-zone",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get events() { return [{
      "method": "sendBankInfo",
      "name": "sendBankInfo",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "BankInformation",
        "resolved": "BankInformation",
        "references": {
          "BankInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
