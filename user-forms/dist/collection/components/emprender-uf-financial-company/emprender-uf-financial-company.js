import { Component, Host, h, Event, Prop } from '@stencil/core';
import { FINANCIAL_OPTIONS } from '../../module/helper';
import { formatNumber } from '../../utils/utils';
import { checkData } from '../../module/validation';
import { loadCSS, loadScript } from '../../utils/utils';
export class EmprenderUfFinancialInformation {
  constructor() {
    this.model = {
      salesIncome: null,
      rentIncome: null,
      activityIncome: null,
      otherIncomes: null,
      otherIncomesDescription: '',
      incomeSupport: '',
      otherExpenses: null,
      otherExpensesDescription: '',
      personalExpenses: null,
      rentExpenses: null,
      debtExpenses: null,
      businessExpenses: null,
      totalIncomes: 0,
      totalExpenses: 0,
      totalAssets: null,
      totalLiabilities: null,
    };
    this.adminZone = false;
    this.requiredData = [];
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
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
    this._calculateTotalField('totalIncomes', ['salesIncome', 'rentIncome', 'activityIncome', 'otherIncomes']);
  }
  _calculateTotalExpenses(field, value) {
    this._setModel(field, value, false);
    this._calculateTotalField('totalExpenses', ['personalExpenses', 'rentExpenses', 'debtExpenses', 'businessExpenses', 'otherExpenses']);
  }
  _calculateTotalField(targetField, fields) {
    const total = fields.reduce((state, field) => {
      const fieldValue = !!this.model[field] && !isNaN(this.model[field]) ? this.model[field] : 0;
      return state + parseFloat(fieldValue);
    }, 0);
    this._setModel(targetField, total);
  }
  _validateOtherInformation(field) {
    var _a, _b, _c;
    return ((_a = this.model[field]) === null || _a === void 0 ? void 0 : _a.toString()) === '' || ((_b = this.model[field]) === null || _b === void 0 ? void 0 : _b.toString()) === '0' || ((_c = this.model[field]) === null || _c === void 0 ? void 0 : _c.toString()) === undefined;
  }
  _checkSubmitInfo() {
    const lista = checkData(this.model);
    console.log(this.model.incomeSupport);
    if (this._validateOtherInformation('otherIncomes')) {
      if (lista.indexOf('otherIncomesDescription') > -1)
        lista.splice(lista.indexOf('otherIncomesDescription'), 1);
      this._setModel('otherIncomesDescription', '');
    }
    if (this._validateOtherInformation('otherExpenses')) {
      if (lista.indexOf('otherExpensesDescription') > -1)
        lista.splice(lista.indexOf('otherExpensesDescription'), 1);
      this._setModel('otherExpensesDescription', '');
    }
    console.log(lista);
    if (lista.length === 0) {
      this.infoSaved.emit(this.model);
    }
    this.requiredData = lista;
  }
  onInputChange(files) {
    if (files.length >= 1) {
      this._setModel('incomeSupport', files[0].name);
    }
  }
  render() {
    return (h(Host, null,
      h("section", { class: "employeeRegistration" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              this.adminZone ? h("h3", { class: "titleClient" }, "Informaci\u00F3n Financiera") : h("h2", { class: "title" }, "Informaci\u00F3n Financiera"),
              this.adminZone || h("h4", null, "Completa la siguiente informaci\u00F3n"),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('salesIncome') > -1, label: 'Ingresos mensuales por concepto de ventas', value: this.model.salesIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('salesIncome', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumericoOpcional", checkData: this.requiredData.indexOf('otherIncome') > -1, label: "Otros ingresos mensuales", value: this.model.otherIncomes, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('otherIncomes', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('activityIncome') > -1, label: 'Ingresos mensuales por tu actividad', value: this.model.activityIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('activityIncome', ev.detail) }))),
                  h("div", { class: "col-md-6" }, !this._validateOtherInformation('otherIncomes') && (h("fieldset", null,
                    h("emprender-cl-input", { dataType: this.model.otherIncomes !== 0 || this.model.otherIncomes !== null ? 'texto' : 'textoOpcional', label: "Descripci\u00F3n otros ingresos mensuales", checkData: this.requiredData.indexOf('otherIncomesDescription') > -1, value: this.model.otherIncomesDescription, onInputChange: ev => this._setModel('otherIncomesDescription', ev.detail) })))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('rentIncome') > -1, label: 'Ingresos por concepto de arrendamiento', value: this.model.rentIncome, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalIncomes('rentIncome', ev.detail) }))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", { class: "flex-center-center" },
                      h("label", { class: this.requiredData.indexOf('incomeSupport') > -1 && this.model.incomeSupport === "" ? 'checkData_label' : '' }, "Adjuntar soporte de ingresos (Facturas/declaraci\u00F3n de renta)"),
                      h("div", { class: "control" },
                        h("input", { class: "file", id: "file", type: "file", onChange: ($event) => this.onInputChange($event.target.files) }),
                        h("label", { htmlFor: "file" },
                          h("span", { class: "fakebutton button small primary block" }, "Clic para adjuntar"),
                          h("span", { class: this.requiredData.indexOf('incomeSupport') > -1 && this.model.incomeSupport === "" ? 'filetext checkData_label' : 'filetext' }, this.model.incomeSupport !== '' ? this.model.incomeSupport : 'Ningún archivo seleccionado'))))),
                  h("fieldset", { class: "totalBox" },
                    h("label", null,
                      "Total ingresos mensuales: ",
                      h("span", null, formatNumber(this.model.totalIncomes)))))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", label: "Egresos mensuales por costos y gastos del negocio", checkData: this.requiredData.indexOf('businessExpenses') > -1, value: this.model.businessExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('businessExpenses', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", label: "Tus egresos mensuales por pago de deuda", checkData: this.requiredData.indexOf('debtExpenses') > -1, value: this.model.debtExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('debtExpenses', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", label: "Tus egresos mensuales personales / familiares", checkData: this.requiredData.indexOf('personalExpenses') > -1, value: this.model.personalExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('personalExpenses', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumericoOpcional", label: "Otros egresos mensuales", value: this.model.otherExpenses, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._calculateTotalExpenses('otherExpenses', ev.detail) }))),
                  h("div", { class: "col-md-6" }, !this._validateOtherInformation('otherExpenses') && (h("fieldset", null,
                    h("emprender-cl-input", { dataType: this.model.otherIncomes !== 0 || this.model.otherIncomes !== null ? 'texto' : 'textoOpcional', label: "Descripci\u00F3n otros egresos mensuales", checkData: this.requiredData.indexOf('otherExpensesDescription') > -1, value: this.model.otherExpensesDescription, onInputChange: ev => this._setModel('otherExpensesDescription', ev.detail) }))))),
                h("fieldset", { class: "totalBox" },
                  h("label", null,
                    "Total egresos mensuales: ",
                    h("span", null, formatNumber(this.model.totalExpenses))))),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", label: "Total Activos", checkData: this.requiredData.indexOf('totalAssets') > -1, value: this.model.totalAssets, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._setModel('totalAssets', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", label: "Total Pasivos", checkData: this.requiredData.indexOf('totalLiabilities') > -1, value: this.model.totalLiabilities, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._setModel('totalLiabilities', ev.detail) }))))),
              this.requiredData.length === 0 ? null : (h("div", { class: "errorText" },
                h("emprender-cl-icon", { icon: "alert", path: 0 }),
                "Debes completar todos los campos marcados para poder continuar.")),
              this.adminZone || h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() }))),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-financial-company"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-financial-company.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-financial-company.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "FinancialCompanyInformation",
        "resolved": "FinancialCompanyInformation",
        "references": {
          "FinancialCompanyInformation": {
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
      "defaultValue": "{\r\n    salesIncome: null,\r\n    rentIncome: null,\r\n    activityIncome: null,\r\n    otherIncomes: null,\r\n    otherIncomesDescription: '',\r\n    incomeSupport: '',\r\n    otherExpenses: null,\r\n    otherExpensesDescription: '',\r\n    personalExpenses: null,\r\n    rentExpenses: null,\r\n    debtExpenses: null,\r\n    businessExpenses: null,\r\n    totalIncomes: 0,\r\n    totalExpenses: 0,\r\n    totalAssets: null,\r\n    totalLiabilities: null,\r\n  }"
    },
    "adminZone": {
      "type": "boolean",
      "mutable": true,
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
      "reflect": true,
      "defaultValue": "false"
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
        "original": "FinancialCompanyInformation",
        "resolved": "FinancialCompanyInformation",
        "references": {
          "FinancialCompanyInformation": {
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
        "original": "FinancialCompanyInformation",
        "resolved": "FinancialCompanyInformation",
        "references": {
          "FinancialCompanyInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
