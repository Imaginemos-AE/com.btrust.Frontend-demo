import { Component, h, State, Host, Event, Prop } from '@stencil/core';
import { checkData2 } from '../../module/validation';
import { COUNTRY } from '../../utils/country';
export class EmprenderUfPersonalInformation3 {
  constructor() {
    this.model = {
      firstName: '',
      middleName: '',
      surName: '',
      secondSurName: '',
      documentType: '',
      documentNumber: '',
      expeditionDate: '',
      expeditionDepartment: '',
      expeditionCity: '',
      mobilePhone: '',
      phone: '',
      email: '',
      birthDate: '',
      nationality: '',
      cityOfBirth: '',
      departmentOfBirth: '',
      gender: '',
    };
    this.model2 = {
      academicLevel: '',
      childrenNumber: '',
      dependents: '',
      civilState: '',
      cityOfResidence: '',
      departmentOfResidence: '',
      address: '',
      place: '',
      stratus: 4,
      dwellingType: '',
      rent: 0,
      residenceTime: '',
      employment: '',
    };
    this.model3 = {
      bankName: '',
      accountType: '',
      accountNumber: '',
    };
    this.requiredData = '';
    this.adminZone = false;
    this.departments = COUNTRY;
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  _setModel2(field, value) {
    this.model2 = Object.assign(Object.assign({}, this.model2), { [field]: value });
  }
  _setModel3(field, value) {
    this.model3 = Object.assign(Object.assign({}, this.model3), { [field]: value });
  }
  _getSelectDepartmentOptions() {
    return this.departments.map(department => ({ id: department.departamento, name: department.departamento }));
  }
  _getSelectCitiesOptions(field) {
    const department = this.departments.find(department => department.departamento === this.model2[field]);
    if (department) {
      return department.ciudades.map(city => ({ id: city, name: city }));
    }
    return [];
  }
  _selectDropdownOption(field, value, clearField) {
    this._setModel2(field, value);
    this._setModel2(clearField, '');
  }
  _checkSubmitInfo() {
    //recuerda model3
    const lista = checkData2(Object.assign(Object.assign({}, this.model), this.model2), 'informationProfile');
    if (lista.length === 0) {
      this.upgradeInfo.emit([this.model, this.model2, this.model3, 'up']);
    }
    console.log(lista);
    this.requiredData = lista.toString();
  }
  _getTitle() {
    if (this.adminZone) {
      return h("h3", { class: "titleClient" }, "Informaci\u00F3n Personal");
    }
    else {
      return h("h2", { class: "title" }, "1. Informaci\u00F3n Personal");
    }
  }
  render() {
    return (h(Host, null,
      h("section", { class: "clientForms" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              this._getTitle(),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-input", { inputOptions: { disabled: '{this.disabled}' }, label: "Nombre", value: `${this.model.firstName} ${this.model.middleName} ${this.model.surName} ${this.model.secondSurName}` }))),
                  h("div", { class: "col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "celular", checkData: this.requiredData.indexOf('mobilePhone') > -1, label: "N\u00FAmero de tel\u00E9fono", value: this.model.mobilePhone, onInputChange: ev => this._setModel('mobilePhone', ev.detail) }))),
                  h("div", { class: "col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "correo", checkData: this.requiredData.indexOf('email') > -1, label: "Correo electr\u00F3nico", value: this.model.email, onInputChange: ev => this._setModel('email', ev.detail) }))),
                  h("div", { class: "col-lg-3 col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('academicLevel') > -1, label: "Nivel acad\u00E9mico", value: this.model2.academicLevel, onSelectChange: ev => this._setModel2('academicLevel', ev.detail) },
                        h("option", { value: "primaria" }, "Primaria"),
                        h("option", { value: "bachillerato" }, "Bachillerato"),
                        h("option", { value: "tecnico_tecnologo" }, "T\u00E9cnico - Tecn\u00F3logo"),
                        h("option", { value: "universitario" }, "Universitario"),
                        h("option", { value: "postgrado_especializacion" }, "Posgrado - Especializaci\u00F3n"),
                        h("option", { value: "ninguno" }, "Ninguno")))),
                  h("div", { class: "col-lg-3 col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('childrenNumber') > -1, label: "N\u00FAmero de hijos", value: this.model2.childrenNumber, onSelectChange: ev => this._setModel2('childrenNumber', ev.detail) },
                        h("option", { value: "0" }, "0"),
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: ">4" }, '>4')))),
                  h("div", { class: "col-lg-3 col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('dependents') > -1, label: "Personas a cargo", value: this.model2.dependents, onSelectChange: ev => this._setModel2('dependents', ev.detail) },
                        h("option", { value: "0" }, "0"),
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: ">4" }, '>4')))),
                  h("div", { class: "col-lg-3 col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('civilState') > -1, label: "Estado civil", value: this.model2.civilState, onSelectChange: ev => this._setModel2('civilState', ev.detail) },
                        h("option", { value: "soltero" }, "Soltero(a)"),
                        h("option", { value: "casado" }, "Casado(a)"),
                        h("option", { value: "union_libre" }, "Uni\u00F3n libre"),
                        h("option", { value: "viudo" }, "Viudo(a)"),
                        h("option", { value: "otro" }, "Otro")))),
                  h("div", { class: "col-lg-6 col-md-8" },
                    h("fieldset", { class: "mb0" },
                      h("label", null, "Departamento y ciudad de residencia"),
                      h("div", { class: "row" },
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { checkData: this.requiredData.indexOf('departmentOfResidence') > -1, value: this.model2.departmentOfResidence, options: this._getSelectDepartmentOptions(), onSelectChange: ev => this._selectDropdownOption('departmentOfResidence', ev.detail, 'cityOfResidence') }))),
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { checkData: this.requiredData.indexOf('cityOfResidence') > -1, value: this.model2.cityOfResidence, options: this._getSelectCitiesOptions('departmentOfResidence'), onSelectChange: ev => this._setModel('cityOfResidence', ev.detail) })))))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('address') > -1, typeAddress: !this.adminZone, label: "Direcci\u00F3n de la vivienda", value: this.model2.address, id: "direccion", onInputChange: ev => {
                          this._setModel2('address', ev.detail);
                        } }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumericoOpcional", checkData: this.requiredData.indexOf('place') > -1, label: "Torre/ Apto/ Conjunto", value: this.model2.place, onInputChange: ev => this._setModel2('place', ev.detail) }))),
                  h("div", { class: "col-md-3" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('stratus') > -1, label: "Estrato", value: this.model2.stratus, onSelectChange: ev => this._setModel2('stratus', ev.detail) },
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: "5" }, "5"),
                        h("option", { value: "6" }, "6")))),
                  h("div", { class: "col-md-3" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('dwellingType') > -1, label: "Tipo de vivienda", value: this.model2.dwellingType, onSelectChange: ev => this._setModel2('dwellingType', ev.detail) },
                        h("option", { value: "propia" }, "Propia"),
                        h("option", { value: "arrendada" }, "Arrendada"),
                        h("option", { value: "familiar" }, "Familiar"),
                        h("option", { value: "otro" }, "Otro")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Informaci\u00F3n Cuenta Bancaria", value: this.model3.bankName, onSelectChange: ev => this._setModel3('bankName', ev.detail) },
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
                        h("option", { value: "scotiabank colpatria" }, "SCOTIABANK COLPATRIA")))),
                  h("div", { class: "col-lg-3 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('accountType') > -1, label: "Tipo de Cuenta Bancaria", value: this.model3.accountType, onSelectChange: ev => this._setModel3('accountType', ev.detail) },
                        h("option", { value: "ahorros" }, "Ahorro"),
                        h("option", { value: "corriente" }, "Corriente")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { 
                        // dataType="numerico"
                        // checkData={this.requiredData.indexOf('accountNumber') > -1 }
                        label: "N\u00FAmero Cuenta Bancaria", value: this.model3.accountNumber, onInputChange: ev => this._setModel3('accountNumber', ev.detail) }))))),
              this.adminZone || (h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Actualizar", modifiers: "medium quaternary", onclick: () => this.upgradeInfo.emit([this.model, this.model2, this.model3, '']) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() })))),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-personal-information-3"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-personal-information-3.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-personal-information-3.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "PersonalInformation",
        "resolved": "PersonalInformation",
        "references": {
          "PersonalInformation": {
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
      "defaultValue": "{\r\n    firstName: '',\r\n    middleName: '',\r\n    surName: '',\r\n    secondSurName: '',\r\n    documentType: '',\r\n    documentNumber: '',\r\n    expeditionDate: '',\r\n    expeditionDepartment: '',\r\n    expeditionCity: '',\r\n    mobilePhone: '',\r\n    phone: '',\r\n    email: '',\r\n    birthDate: '',\r\n    nationality: '',\r\n    cityOfBirth: '',\r\n    departmentOfBirth: '',\r\n    gender: '',\r\n  }"
    },
    "model2": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "PersonalInformation2",
        "resolved": "PersonalInformation2",
        "references": {
          "PersonalInformation2": {
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
      "defaultValue": "{\r\n    academicLevel: '',\r\n    childrenNumber: '',\r\n    dependents: '',\r\n    civilState: '',\r\n    cityOfResidence: '',\r\n    departmentOfResidence: '',\r\n    address: '',\r\n    place: '',\r\n    stratus: 4,\r\n    dwellingType: '',\r\n    rent: 0,\r\n    residenceTime: '',\r\n    employment: '',\r\n  }"
    },
    "model3": {
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
    }
  }; }
  static get states() { return {
    "departments": {}
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
        "original": "PersonalInformation",
        "resolved": "PersonalInformation",
        "references": {
          "PersonalInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }, {
      "method": "upgradeInfo",
      "name": "upgradeInfo",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "[PersonalInformation, PersonalInformation2, BankInformation, string]",
        "resolved": "[PersonalInformation, PersonalInformation2, BankInformation, string]",
        "references": {
          "PersonalInformation": {
            "location": "import",
            "path": "../../module/models"
          },
          "PersonalInformation2": {
            "location": "import",
            "path": "../../module/models"
          },
          "BankInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
