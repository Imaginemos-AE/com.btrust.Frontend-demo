import { Component, h, State, Host, Event, Prop } from '@stencil/core';
import { COUNTRY } from '../../utils/country';
export class EmprenderUfPersonalInformation {
  constructor() {
    this.model = {
      firstName: "",
      middleName: "",
      surName: "",
      secondSurName: "",
      documentType: "",
      documentNumber: "",
      expeditionDate: "",
      expeditionDepartment: "",
      expeditionCity: "",
      mobilePhone: "",
      phone: "",
      email: "",
      birthDate: "",
      nationality: "",
      cityOfBirth: "",
      departmentOfBirth: "",
      gender: ""
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
  componentWillRender() {
    this.sendInfo.emit(this.model);
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
                  h("div", { class: "col-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Primer nombre", value: this.model.firstName, onInputChange: (ev) => this._setModel("firstName", ev.detail) }))),
                  h("div", { class: "col-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Segundo nombre", value: this.model.middleName, onInputChange: (ev) => this._setModel("middleName", ev.detail) }))),
                  h("div", { class: "col-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Primer apellido", value: this.model.surName, onInputChange: (ev) => this._setModel("surName", ev.detail) }))),
                  h("div", { class: "col-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Segundo apellido", value: this.model.secondSurName, onInputChange: (ev) => this._setModel("secondSurName", ev.detail) }))),
                  h("div", { class: "col-md-6 col-lg-4" },
                    h("fieldset", { class: "mb17" },
                      h("emprender-cl-select", { label: "Tipo de Documento", value: this.model.documentType, onSelectChange: (ev) => this._setModel("documentType", ev.detail) },
                        h("option", { value: "cedula_ciudadania" }, "C\u00E9dula de ciudadan\u00EDa"),
                        h("option", { value: "cedula_extranjeria" }, "C\u00E9dula de extranjer\u00EDa"),
                        h("option", { value: "nit" }, "NIT")))),
                  h("div", { class: "col-md-6 col-lg-4" },
                    h("fieldset", { class: "mb17" },
                      h("emprender-cl-input", { label: "N\u00FAmero de documento", value: this.model.documentNumber, onInputChange: (ev) => this._setModel("documentNumber", ev.detail) }))),
                  h("div", { class: "col-lg-4" },
                    h("fieldset", { class: "mb17" },
                      h("emprender-cl-input", { label: "Fecha de expedici\u00F3n", value: this.model.expeditionDate, inputOptions: { type: 'date' }, onInputChange: (ev) => this._setModel("expeditionDate", ev.detail) }))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", { class: "mb2" },
                      h("label", null, "Departamento y ciudad de expedici\u00F3n del documento"),
                      h("div", { class: "row" },
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { value: this.model.expeditionDepartment, options: this._getSelectDepartmentOptions(), onSelectChange: (ev) => this._selectDropdownOption("expeditionDepartment", ev.detail, "expeditionCity") }))),
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { value: this.model.expeditionCity, options: this._getSelectCitiesOptions("expeditionDepartment"), onSelectChange: (ev) => this._setModel("expeditionCity", ev.detail) })))))),
                  h("div", { class: "col-6 col-lg-3" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Celular", value: this.model.mobilePhone, onInputChange: (ev) => this._setModel("mobilePhone", ev.detail) }))),
                  h("div", { class: "col-6 col-lg-3" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Tel\u00E9fono", value: this.model.phone, onInputChange: (ev) => this._setModel("phone", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Correo electr\u00F3nico", inputOptions: { type: 'email' }, value: this.model.email, onInputChange: (ev) => this._setModel("email", ev.detail) }))),
                  h("div", { class: "col-md-6 col-lg-3" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Fecha de nacimiento", inputOptions: { type: 'date' }, value: this.model.birthDate, onInputChange: (ev) => this._setModel("birthDate", ev.detail) }))),
                  h("div", { class: "col-lg-3" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Nacionalidad", 
                        // value={this.model.nationality}
                        value: this.model.nationality ? this.model.nationality : "Colombiana", onInputChange: (ev) => this._setModel("nationality", ev.detail) }))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", { class: "mb0" },
                      h("label", null, "Departamento y ciudad de nacimiento"),
                      h("div", { class: "row" },
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { value: this.model.departmentOfBirth, options: this._getSelectDepartmentOptions(), onSelectChange: (ev) => this._selectDropdownOption("departmentOfBirth", ev.detail, "cityOfBirth") }))),
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { value: this.model.cityOfBirth, options: this._getSelectCitiesOptions("departmentOfBirth"), onSelectChange: (ev) => this._setModel("cityOfBirth", ev.detail) })))))),
                  h("div", { class: "col-lg-3" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "G\u00E9nero", value: this.model.gender, onSelectChange: (ev) => this._setModel("gender", ev.detail) },
                        h("option", { value: "hombre" }, "Hombre"),
                        h("option", { value: "mujer" }, "Mujer")))))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.infoSaved.emit(this.model) }))),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-personal-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-personal-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-personal-information.css"]
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
      "defaultValue": "{\r\n    firstName: \"\",\r\n    middleName: \"\",\r\n    surName: \"\",\r\n    secondSurName: \"\",\r\n    documentType: \"\",\r\n    documentNumber: \"\",\r\n    expeditionDate: \"\",\r\n    expeditionDepartment: \"\",\r\n    expeditionCity: \"\",\r\n    mobilePhone: \"\",\r\n    phone: \"\",\r\n    email: \"\",\r\n    birthDate: \"\",\r\n    nationality: \"\",\r\n    cityOfBirth: \"\",\r\n    departmentOfBirth: \"\",\r\n    gender: \"\"\r\n  }"
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
      "method": "sendInfo",
      "name": "sendInfo",
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
    }]; }
}
