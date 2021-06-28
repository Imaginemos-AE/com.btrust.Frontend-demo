import { Component, Host, h, Event, Prop } from '@stencil/core';
import { formatNumber } from '../../utils/utils';
const FINANCIAL_OPTIONS = {
  mask: Number,
  scale: 2,
  signed: false,
  thousandsSeparator: '.',
  padFractionalZeros: false,
  normalizeZeros: true,
  radix: ',',
  mapToRadix: [','],
  min: 0
};
export class EmprenderUfFinancialInformation {
  constructor() {
    this.model = {
      salaryIncome: null,
      variableSalaryIncome: null,
      otherIncomes: null,
      otherIncomesDescription: "",
      totalAssets: 0,
      personalExpenses: null,
      rentExpenses: null,
      debtExpenses: null,
      otherExpenses: null,
      otherExpensesDescription: "",
      totalExpenses: null,
      totalLiabilities: null,
    };
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  _calculateTotalIncomes(field, value) {
    this.model[field] = value;
    const totalAssets = ["salaryIncome", "variableSalaryIncome", "otherIncomes"].reduce((state, field) => {
      const fieldValue = !!this.model[field] && !isNaN(this.model[field]) ? this.model[field] : 0;
      return state + parseFloat(fieldValue);
    }, 0);
    this._setModel("totalAssets", totalAssets);
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
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Descripci\u00F3n otros ingresos mensuales", inputOptions: { type: 'text' }, onInputChange: (ev) => this._setModel("otherIncomesDescription", ev.detail) }))),
                  h("fieldset", { class: "totalBox mt0" },
                    h("label", null,
                      "Total ingresos mensuales: ",
                      h("span", null, formatNumber(this.model.totalAssets)))))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales personales / familiares", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("personalExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de arriendos", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("rentExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Egresos mensuales por pago de deuda", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("debtExpenses", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otros egresos mensuales", maskOptions: FINANCIAL_OPTIONS, onInputChange: (ev) => this._setModel("otherExpenses", ev.detail) })),
                    this.model.otherExpenses &&
                      h("fieldset", null,
                        h("emprender-cl-input", { label: "Descripci\u00F3n otros egresos mensuales", onInputChange: (ev) => this._setModel("otherExpensesDescription", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total egresos mensuales", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("totalExpenses", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Total Pasivos", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("totalLiabilities", ev.detail) }))))),
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
      "defaultValue": "{\n    salaryIncome: null,\n    variableSalaryIncome: null,\n    otherIncomes: null,\n    otherIncomesDescription: \"\",\n    totalAssets: 0,\n    personalExpenses: null,\n    rentExpenses: null,\n    debtExpenses: null,\n    otherExpenses: null,\n    otherExpensesDescription: \"\",\n    totalExpenses: null,\n    totalLiabilities: null,\n  }"
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
