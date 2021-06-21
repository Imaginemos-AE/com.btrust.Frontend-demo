import { Component, Host, h, Event, Prop } from '@stencil/core';
export class EmprenderUfFinancialInformation {
  constructor() {
    this.model = {
      salaryIncome: 0,
      variableSalaryIncome: 0,
      otherIncomes: 0,
      otherIncomesDescription: "",
      totalAssets: 0,
      personalExpenses: 0,
      rentExpenses: 0,
      debtExpenses: 0,
      otherExpenses: 0,
      otherExpensesDescription: "",
      totalExpenses: 0,
      totalLiabilities: 0,
    };
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
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
                h("div", { class: "row mb20" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Ingresos mensuales por concepto de salario fijo", value: this.model.salaryIncome, inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("salaryIncome", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Ingresos mensuales por concepto de salario variable (promedio)", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("variableSalaryIncome", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros ingresos mensuales", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("otherIncomes", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Descripci\u00F3n otros ingresos mensuales", onInputChange: (ev) => this._setModel("otherIncomesDescription", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Activos", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("totalAssets", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales personales / familiares", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("personalExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de arriendos", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("rentExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de deuda", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("debtExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros egresos mensuales", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("otherExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Descripci\u00F3n otros egresos mensuales", onInputChange: (ev) => this._setModel("otherExpensesDescription", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total egresos mensuales", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("totalExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Pasivos", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("totalLiabilities", ev.detail) })))),
                h("div", { class: "contcenter" },
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
      "defaultValue": "{\n    salaryIncome: 0,\n    variableSalaryIncome: 0,\n    otherIncomes: 0,\n    otherIncomesDescription: \"\",\n    totalAssets: 0,\n    personalExpenses: 0,\n    rentExpenses: 0,\n    debtExpenses: 0,\n    otherExpenses: 0,\n    otherExpensesDescription: \"\",\n    totalExpenses: 0,\n    totalLiabilities: 0,\n  }"
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
    }]; }
}
