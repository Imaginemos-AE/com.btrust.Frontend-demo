import { Component, Host, h, State, Event } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
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
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
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
                      h("emprender-cl-input", { label: "Ingresos mensuales por concepto de salario fijo", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("salaryIncome", ev.detail) })),
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
  static get states() { return {
    "model": {}
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
