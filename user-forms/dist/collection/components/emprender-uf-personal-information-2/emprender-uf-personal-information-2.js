import { Component, Host, h, State, Event } from '@stencil/core';
import { COUNTRY } from '../../utils/country';
export class EmprenderUfPersonalInformation2 {
  constructor() {
    this.model = {
      academicLevel: "",
      childrenNumber: 0,
      dependents: 0,
      civilState: "",
      cityOfResidence: "",
      departmentOfResidence: "",
      address: "",
      stratus: 4,
      dwellingType: "",
      rent: 0,
      residenceTime: "",
      employment: ""
    };
    this.departments = COUNTRY;
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
      ;
    }
    return [];
  }
  _selectDropdownOption(field, value, clearField) {
    this._setModel(field, value);
    this._setModel(clearField, "");
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
                      h("emprender-cl-select", { label: "Nivel acad\u00E9mico", onSelectChange: (ev) => this._setModel("academicLevel", ev.detail) },
                        h("option", { value: "universitario" }, "Universitario"),
                        h("option", { value: "bachiller" }, "Bachiller")))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "N\u00FAmero de hijos", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("childrenNumber", ev.detail) }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Personas a cargo", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("dependents", ev.detail) }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Estado civil", onSelectChange: (ev) => this._setModel("civilState", ev.detail) },
                        h("option", { value: "casado" }, "Casado"),
                        h("option", { value: "soltero" }, "Soltero")))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", { class: "mb0" },
                      h("label", null, "Ciudad y departamento de residencia"),
                      h("div", { class: "row" },
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { value: this.model.departmentOfResidence, options: this._getSelectDepartmentOptions(), onSelectChange: (ev) => this._selectDropdownOption("departmentOfResidence", ev.detail, "cityOfResidence") }))),
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { value: this.model.cityOfResidence, options: this._getSelectCitiesOptions("departmentOfResidence"), onSelectChange: (ev) => this._setModel("cityOfResidence", ev.detail) })))))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Direcci\u00F3n de la vivienda", onInputChange: (ev) => this._setModel("address", ev.detail) }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Estrato", value: this.model.stratus, onSelectChange: (ev) => this._setModel("stratus", ev.detail) },
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: "5" }, "5"),
                        h("option", { value: "6" }, "6")))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Tipo de vivienda", value: this.model.dwellingType, onSelectChange: (ev) => this._setModel("dwellingType", ev.detail) },
                        h("option", { value: "propia" }, "Propia"),
                        h("option", { value: "arriendo" }, "Arriendo")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "\u00BFCu\u00E1nto pagas por arriendo?", inputOptions: { type: 'number', min: 0 }, onInputChange: (ev) => this._setModel("rent", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Tiempo de residencia", value: this.model.residenceTime, onSelectChange: (ev) => this._setModel("residenceTime", ev.detail) },
                        h("option", { value: "1-2" }, "Entre 1 y 2 a\u00F1os"),
                        h("option", { value: "2-5" }, "Entre 2 y 5"),
                        h("option", { value: "5+" }, "M\u00E1s de 5 a\u00F1os")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Ocupaci\u00F3n", value: this.model.employment, onSelectChange: (ev) => this._setModel("employment", ev.detail) },
                        h("option", { value: "Empleado" }, "Empleado"),
                        h("option", { value: "Independiente" }, "Independiente"),
                        h("option", { value: "Pensionado" }, "Pensionado")))))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.infoSaved.emit(this.model) }))),
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
  static get states() { return {
    "model": {},
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
