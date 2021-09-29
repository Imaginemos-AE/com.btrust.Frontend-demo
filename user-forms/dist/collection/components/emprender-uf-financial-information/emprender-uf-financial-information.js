import { Component, Host, h, Event, Prop } from '@stencil/core';
import { FINANCIAL_OPTIONS } from '../../module/helper';
import { formatNumber } from '../../utils/utils';
import { checkData } from '../../module/validation';
export class EmprenderUfFinancialInformation {
  constructor() {
    this.model = {
      salaryIncome: null,
      variableSalaryIncome: null,
      otherIncomes: null,
      otherIncomesDescription: '',
      totalIncomes: 0,
      personalExpenses: null,
      rentExpenses: null,
      debtExpenses: null,
      otherExpenses: null,
      otherExpensesDescription: '',
      totalExpenses: 0,
      totalAssets: null,
      totalLiabilities: null,
    };
    this.requiredData = [];
    this.fileName = 'Ningún archivo seleccionado';
  }
  _setModel(field, value, reloadModel = true) {
    if (reloadModel) {
      this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
    }
    else {
      this.model[field] = value;
    }
  }
  _calculateTotalIncomes(field, value) {
    this._setModel(field, value, false);
    this._calculateTotalField('totalIncomes', ['salaryIncome', 'variableSalaryIncome', 'otherIncomes']);
  }
  _calculateTotalExpenses(field, value) {
    this._setModel(field, value, false);
    this._calculateTotalField('totalExpenses', ['personalExpenses', 'rentExpenses', 'debtExpenses', 'otherExpenses']);
  }
  _calculateTotalField(targetField, fields) {
    const total = fields.reduce((state, field) => {
      const fieldValue = !!this.model[field] && !isNaN(this.model[field]) ? this.model[field] : 0;
      return state + parseFloat(fieldValue);
    }, 0);
    this._setModel(targetField, total);
  }
  _checkSubmitInfo() {
    const lista = checkData(this.model);
    if (lista.length === 0) {
      this.infoSaved.emit(this.model);
    }
    this.requiredData = lista;
    // console.log(lista.toString());
  }
  onInputChange(files) {
    this.fileName = files.length < 1 ? 'Ningún archivo seleccionado' : files[0].name;
  }
  render() {
    return (h(Host, null,
      h("section", { class: "employeeRegistration" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("h2", { class: "title" }, "Informaci\u00F3n Financiera"),
              h("h4", null, "Completa la siguiente informaci\u00F3n"),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { checkData: this.requiredData.indexOf('salaryIncome') > -1, label: this.flow == 'employee' ? 'Ingresos mensuales por concepto de salario fijo' : 'Ingresos mensuales por concepto de ventas', value: this.model.salaryIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('salaryIncome', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros ingresos mensuales", value: this.model.otherIncomes, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('otherIncomes', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: this.flow == 'employee' ? 'Ingresos mensuales por concepto de salario variable' : 'Ingresos mensuales por conceptos de arrendamientos', value: this.model.variableSalaryIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('variableSalaryIncome', ev.detail) }))),
                  h("div", { class: "col-md-6" }, this.model.otherIncomes && (h("fieldset", null,
                    h("emprender-cl-input", { dataType: "alfanumericoOpcional", label: "Descripci\u00F3n otros ingresos mensuales", checkData: this.requiredData.indexOf('otherIncomesDescription') > -1, value: this.model.otherIncomesDescription, inputOptions: { type: 'text' }, onInputChange: ev => this._setModel('otherIncomesDescription', ev.detail) })))),
                  this.flow === 'employee' ? (h("fieldset", { class: "totalBox mt0" },
                    h("label", null,
                      "Total ingresos mensuales: ",
                      h("span", null, formatNumber(this.model.totalIncomes))))) : ([
                    h("div", { class: "col-lg-6" },
                      h("fieldset", { class: "flex-center-center" },
                        h("label", null, "Adjuntar soporte de ingresos (Facturas/declaraci\u00F3n de renta)"),
                        h("div", { class: "control" },
                          h("input", { class: "file", id: "file", type: "file", onChange: ($event) => this.onInputChange($event.target.files) }),
                          h("label", { htmlFor: "file" },
                            h("span", { class: "fakebutton button small primary block" }, "Clic para adjuntar"),
                            h("span", { class: "filetext" }, this.fileName))))),
                    h("div", { class: "col-lg-6" },
                      h("fieldset", { class: "totalBox" },
                        h("label", null,
                          "Total ingresos mensuales: ",
                          h("span", null, formatNumber(this.model.totalIncomes))))),
                  ]))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales personales / familiares", checkData: this.requiredData.indexOf('personalExpenses') > -1, value: this.model.personalExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('personalExpenses', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de arriendos", checkData: this.requiredData.indexOf('rentExpenses') > -1, value: this.model.rentExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('rentExpenses', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de deuda", checkData: this.requiredData.indexOf('debtExpenses') > -1, value: this.model.debtExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('debtExpenses', ev.detail) }))),
                  this.flow === 'independent' && (h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Cuales otros egresos mensuales", 
                        // checkData={this.requiredData.indexOf('debtExpenses') > -1}
                        // value={this.model.debtExpenses}
                        maskOptions: FINANCIAL_OPTIONS })))),
                  this.flow == 'independent' && (h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por costos y gastos del negocio", 
                        // checkData={this.requiredData.indexOf('otherExpenses ') > -1 || this.requiredData.indexOf('otherExpenses,') > -1}
                        // value={this.model.otherExpenses}
                        inputOptions: { type: 'text' } })))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros egresos mensuales", value: this.model.otherExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('otherExpenses', ev.detail) })))),
                this.model.otherExpenses && (h("fieldset", null,
                  h("emprender-cl-input", { dataType: "alfanumericoOpcional", label: "Descripci\u00F3n otros egresos mensuales", checkData: this.requiredData.indexOf('otherExpensesDescription') > -1, value: this.model.otherExpensesDescription, inputOptions: { type: 'text' }, onInputChange: ev => this._setModel('otherExpensesDescription', ev.detail) }))),
                h("fieldset", { class: "totalBox" },
                  h("label", null,
                    "Total egresos mensuales: ",
                    h("span", null, formatNumber(this.model.totalExpenses))))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Activos", checkData: this.requiredData.indexOf('totalAssets') > -1, value: this.model.totalAssets, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._setModel('totalAssets', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Pasivos", checkData: this.requiredData.indexOf('totalLiabilities') > -1, value: this.model.totalLiabilities, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._setModel('totalLiabilities', ev.detail) }))))),
              this.requiredData.length === 0 ? null : (h("div", { class: "errorText" },
                h("emprender-cl-icon", { icon: "alert", path: 0 }),
                "Debes completar todos los campos marcados para poder continuar.")),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() }))),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-financial-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-financial-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-financial-information.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "FinancialInformation",
        "resolved": "FinancialInformation",
        "references": {
          "FinancialInformation": {
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
      "defaultValue": "{\r\n    salaryIncome: null,\r\n    variableSalaryIncome: null,\r\n    otherIncomes: null,\r\n    otherIncomesDescription: '',\r\n    totalIncomes: 0,\r\n    personalExpenses: null,\r\n    rentExpenses: null,\r\n    debtExpenses: null,\r\n    otherExpenses: null,\r\n    otherExpensesDescription: '',\r\n    totalExpenses: 0,\r\n    totalAssets: null,\r\n    totalLiabilities: null,\r\n  }"
    },
    "requiredData": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "any[]",
        "resolved": "any[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "[]"
    },
    "flow": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "flow",
      "reflect": true
    },
    "fileName": {
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
      "attribute": "file-name",
      "reflect": true,
      "defaultValue": "'Ning\u00FAn archivo seleccionado'"
    }
  }; }
  static get events() { return [{
      "method": "infoSaved",
      "name": "infoSaved",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "FinancialInformation",
        "resolved": "FinancialInformation",
        "references": {
          "FinancialInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }, {
      "method": "back",
      "name": "back",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "FinancialInformation",
        "resolved": "FinancialInformation",
        "references": {
          "FinancialInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
