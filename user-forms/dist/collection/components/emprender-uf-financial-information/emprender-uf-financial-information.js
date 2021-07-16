import { Component, Host, h, Event, Prop } from '@stencil/core';
import { FINANCIAL_OPTIONS } from '../../module/helper';
import { formatNumber } from '../../utils/utils';
export class EmprenderUfFinancialInformation {
  constructor() {
    this.model = {
      salaryIncome: null,
      variableSalaryIncome: null,
      otherIncomes: null,
      otherIncomesDescription: "",
      totalIncomes: 0,
      personalExpenses: null,
      rentExpenses: null,
      debtExpenses: null,
      otherExpenses: null,
      otherExpensesDescription: "",
      totalExpenses: 0,
      totalAssets: null,
      totalLiabilities: null,
    };
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
    this._calculateTotalField("totalIncomes", ["salaryIncome", "variableSalaryIncome", "otherIncomes"]);
  }
  _calculateTotalExpenses(field, value) {
    this._setModel(field, value, false);
    this._calculateTotalField("totalExpenses", ["personalExpenses", "rentExpenses", "debtExpenses", "otherExpenses"]);
  }
  _calculateTotalField(targetField, fields) {
    const total = fields.reduce((state, field) => {
      const fieldValue = !!this.model[field] && !isNaN(this.model[field]) ? this.model[field] : 0;
      return state + parseFloat(fieldValue);
    }, 0);
    this._setModel(targetField, total);
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
                      h("emprender-cl-input", { label: "Ingresos mensuales por concepto de salario fijo", value: this.model.salaryIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalIncomes("salaryIncome", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Ingresos mensuales por concepto de salario variable", value: this.model.variableSalaryIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalIncomes("variableSalaryIncome", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros ingresos mensuales", value: this.model.otherIncomes, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalIncomes("otherIncomes", ev.detail) })),
                    this.model.otherIncomes &&
                      h("fieldset", null,
                        h("emprender-cl-input", { label: "Descripci\u00F3n otros ingresos mensuales", value: this.model.otherIncomesDescription, inputOptions: { type: 'text' }, onInputChange: (ev) => this._setModel("otherIncomesDescription", ev.detail) }))),
                  h("fieldset", { class: "totalBox mt0" },
                    h("label", null,
                      "Total ingresos mensuales: ",
                      h("span", null, formatNumber(this.model.totalIncomes)))))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales personales / familiares", value: this.model.personalExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalExpenses("personalExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de arriendos", value: this.model.rentExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalExpenses("rentExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de deuda", value: this.model.debtExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalExpenses("debtExpenses", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros egresos mensuales", value: this.model.otherExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._calculateTotalExpenses("otherExpenses", ev.detail) })),
                    this.model.otherExpenses &&
                      h("fieldset", null,
                        h("emprender-cl-input", { label: "Descripci\u00F3n otros egresos mensuales", value: this.model.otherExpensesDescription, inputOptions: { type: 'text' }, onInputChange: (ev) => this._setModel("otherExpensesDescription", ev.detail) })),
                    h("fieldset", { class: "totalBox" },
                      h("label", null,
                        "Total egresos mensuales: ",
                        h("span", null, formatNumber(this.model.totalExpenses))))))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Activos", value: this.model.totalAssets, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._setModel("totalAssets", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Pasivos", value: this.model.totalLiabilities, maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._setModel("totalLiabilities", ev.detail) }))))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.infoSaved.emit(this.model) }))),
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
      "defaultValue": "{\n    salaryIncome: null,\n    variableSalaryIncome: null,\n    otherIncomes: null,\n    otherIncomesDescription: \"\",\n    totalIncomes: 0,\n    personalExpenses: null,\n    rentExpenses: null,\n    debtExpenses: null,\n    otherExpenses: null,\n    otherExpensesDescription: \"\",\n    totalExpenses: 0,\n    totalAssets: null,\n    totalLiabilities: null,\n  }"
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
