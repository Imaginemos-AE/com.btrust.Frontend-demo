import { Component, Host, h, State, Event, Prop } from '@stencil/core';
import { FINANCIAL_OPTIONS } from '../../module/helper';
import { checkData } from '../../module/validation';
import { COUNTRY } from '../../utils/country';
export class EmprenderUfPersonalInformation2 {
  constructor() {
    this.model = {
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
    this.departments = COUNTRY;
    this.requiredData = '';
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  _getSelectDepartmentOptions() {
    return this.departments.map(department => ({ id: department.departamento, name: department.departamento }));
  }
  _getSelectCitiesOptions(field) {
    const department = this.departments.find(department => department.departamento === this.model[field]);
    if (department) {
      return department.ciudades.map(city => ({ id: city, name: city }));
    }
    return [];
  }
  _selectDropdownOption(field, value, clearField) {
    this._setModel(field, value);
    this._setModel(clearField, '');
  }
  _checkSubmitInfo() {
    const lista = checkData(this.model);
    if (lista.length === 0) {
      this.infoSaved.emit(this.model);
    }
    this.requiredData = lista.toString();
  }
  render() {
    return (h(Host, null,
      h("section", { class: "employeeRegistration" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("h2", { class: "title" }, "Informaci\u00F3n Personal"),
              h("h4", null, "Completa la siguiente informaci\u00F3n"),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('academicLevel') > -1, label: "Nivel acad\u00E9mico", value: this.model.academicLevel, onSelectChange: ev => this._setModel('academicLevel', ev.detail) },
                        h("option", { value: "primaria" }, "Primaria"),
                        h("option", { value: "bachillerato" }, "Bachillerato"),
                        h("option", { value: "tecnico_tecnologo" }, "T\u00E9cnico - Tecn\u00F3logo"),
                        h("option", { value: "universitario" }, "Universitario"),
                        h("option", { value: "postgrado_especializacion" }, "Posgrado - Especializaci\u00F3n"),
                        h("option", { value: "ninguno" }, "Ninguno")))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('childrenNumber') > -1, label: "N\u00FAmero de hijos", value: this.model.childrenNumber, onSelectChange: ev => this._setModel('childrenNumber', ev.detail) },
                        h("option", { value: "0" }, "0"),
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: ">4" }, '>4')))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('dependents') > -1, label: "Personas a cargo", value: this.model.dependents, onSelectChange: ev => this._setModel('dependents', ev.detail) },
                        h("option", { value: "0" }, "0"),
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: ">4" }, '>4')))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('civilState') > -1, label: "Estado civil", value: this.model.civilState, onSelectChange: ev => this._setModel('civilState', ev.detail) },
                        h("option", { value: "soltero" }, "Soltero(a)"),
                        h("option", { value: "casado" }, "Casado(a)"),
                        h("option", { value: "union_libre" }, "Uni\u00F3n libre"),
                        h("option", { value: "viudo" }, "Viudo(a)"),
                        h("option", { value: "otro" }, "Otro")))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", { class: "mb0" },
                      h("label", null, "Departamento y ciudad de residencia"),
                      h("div", { class: "row" },
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { checkData: this.requiredData.indexOf('departmentOfResidence') > -1, value: this.model.departmentOfResidence, options: this._getSelectDepartmentOptions(), onSelectChange: ev => this._selectDropdownOption('departmentOfResidence', ev.detail, 'cityOfResidence') }))),
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { checkData: this.requiredData.indexOf('cityOfResidence') > -1, value: this.model.cityOfResidence, options: this._getSelectCitiesOptions('departmentOfResidence'), onSelectChange: ev => this._setModel('cityOfResidence', ev.detail) })))))),
                  h("div", { class: "col-lg-3 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { checkData: this.requiredData.indexOf('address') > -1, label: "Direcci\u00F3n de la vivienda", value: this.model.address, onInputChange: ev => this._setModel('address', ev.detail) }))),
                  h("div", { class: "col-lg-3 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Torre/ Apto/ Conjunto", checkData: this.requiredData.indexOf('address') > -1, value: this.model.address, onInputChange: ev => this._setModel('address', ev.detail) }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('stratus') > -1, label: "Estrato", value: this.model.stratus, onSelectChange: ev => this._setModel('stratus', ev.detail) },
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: "5" }, "5"),
                        h("option", { value: "6" }, "6")))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('dwellingType') > -1, label: "Tipo de vivienda", value: this.model.dwellingType, onSelectChange: ev => this._setModel('dwellingType', ev.detail) },
                        h("option", { value: "propia" }, "Propia"),
                        h("option", { value: "arrendada" }, "Arrendada"),
                        h("option", { value: "familiar" }, "Familiar"),
                        h("option", { value: "otro" }, "Otro")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { checkData: this.requiredData.indexOf('rent') > -1, label: "\u00BFCu\u00E1nto pagas por arriendo?", value: this.model.rent, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => this._setModel('rent', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('residenceTime') > -1, label: "Tiempo de residencia", value: this.model.residenceTime, onSelectChange: ev => this._setModel('residenceTime', ev.detail) },
                        h("option", { value: "<1" }, `Menos de 1 año`),
                        h("option", { value: "1-2" }, `Entre 1 y 2 años`),
                        h("option", { value: "2-3" }, `Entre 2 y 3 años`),
                        h("option", { value: "3-4" }, `Entre 3 y 4 años`),
                        h("option", { value: ">4" }, `Más de 4 años`)))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('employment') > -1, label: "Ocupaci\u00F3n", value: this.model.employment, onSelectChange: ev => this._setModel('employment', ev.detail) },
                        h("option", { value: "Empleado" }, "Empleado"),
                        h("option", { value: "Independiente" }, "Independiente"),
                        h("option", { value: "Pensionado" }, "Pensionado"),
                        h("option", { value: "Rentista" }, "Rentista"),
                        h("option", { value: "Estudiante" }, "Estudiante"),
                        h("option", { value: "Ama de Casa" }, "Ama de Casa"))))),
                this.requiredData.length === 0 ? null : (h("div", { class: "errorText" },
                  h("emprender-cl-icon", { icon: "alert", path: 0 }),
                  "Debes completar todos los campos marcados para poder continuar."))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() }))),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-personal-information-2"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-personal-information-2.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-personal-information-2.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": false,
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
        "original": "PersonalInformation2",
        "resolved": "PersonalInformation2",
        "references": {
          "PersonalInformation2": {
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
        "original": "PersonalInformation2",
        "resolved": "PersonalInformation2",
        "references": {
          "PersonalInformation2": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
