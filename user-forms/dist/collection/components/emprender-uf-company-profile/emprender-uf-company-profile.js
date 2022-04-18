import { Component, Host, h, State, Event, Prop } from '@stencil/core';
import { checkData2 } from '../../module/validation';
import { COUNTRY } from '../../utils/country';
// import { loadScript } from '../../utils/utils';
export class EmprenderUfConpanyInformation {
  constructor() {
    this.model = {
      companyName: '',
      companyLocation: '',
      address: '',
      place: '',
      departmentOfResidence: '',
      cityOfResidence: '',
      stratus: 4,
      dwellingType: '',
      rent: 0,
      companyType: '',
      nit: '',
      foundatingDate: '',
      companyActivity: '',
      point: '',
      onlineShop: '',
      salePercentage: '',
      employees: '',
      destiny: '',
      otherDestiny: '',
    };
    this.departments = COUNTRY;
    this.requiredData = '';
    this.viewRegistration = true;
    this.adminZone = false;
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
    const lista = checkData2(this.model, 'companyProfile');
    if (lista.length === 0) {
      this.infoSaved.emit(this.model);
    }
    this.requiredData = lista.toString();
  }
  _getTitle() {
    if (this.adminZone) {
      return h("h3", { class: "titleClient" }, "Informaci\u00F3n de la empresa/negocio");
    }
    else {
      return h("h2", { class: "title" }, "2. Informaci\u00F3n de la empresa/negocio");
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
                  h("div", { class: "col-lg-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('companyName') > -1, label: "Nombre de la empresa/negocio", value: this.model.companyName, onInputChange: ev => this._setModel('companyName', ev.detail) }))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('companyLocation') > -1, label: "\u00BFLa ubicaci\u00F3n de la empresa es la misma de la vivienda?", value: this.model.companyLocation, onSelectChange: ev => this._setModel('companyLocation', ev.detail) },
                        h("option", { value: "si" }, "SI"),
                        h("option", { value: "no" }, "NO")))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('address') > -1, label: "Direcci\u00F3n de la vivienda", value: this.model.address, id: "direccion", onInputChange: ev => {
                          this._setModel('address', ev.detail);
                        } }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumericoOpcional", label: "Torre/ Apto/ Conjunto", checkData: this.requiredData.indexOf('place') > -1, value: this.model.place, onInputChange: ev => this._setModel('place', ev.detail) }))),
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
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('stratus') > -1, label: "Estrato", value: this.model.stratus, onSelectChange: ev => this._setModel('stratus', ev.detail) },
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: "5" }, "5"),
                        h("option", { value: "6" }, "6")))),
                  h("div", { class: "col-lg-5 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('dwellingType') > -1, label: "Tipo de vivienda", value: this.model.dwellingType, onSelectChange: ev => this._setModel('dwellingType', ev.detail) },
                        h("option", { value: "propia" }, "Propia"),
                        h("option", { value: "arrendada" }, "Arrendada"),
                        h("option", { value: "familiar" }, "Familiar"),
                        h("option", { value: "otro" }, "Otro")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('companyActivity') > -1, label: "Actividad de la empresa", value: this.model.companyActivity, onSelectChange: ev => this._setModel('companyActivity', ev.detail) },
                        h("option", { value: "comercio_al_por_mayor" }, "Comercio al por mayor y al por menor; reparaci\u00F3n de veh\u00EDculos automotores y motocicletas; transporte y almacenamiento; alojamiento y servicios de comida"),
                        h("option", { value: "industrias_manufactureras" }, "Industrias manufactureras"),
                        h("option", { value: "actividades_financieras" }, "Actividades financieras y de seguros"),
                        h("option", { value: "informacion_y_comunicaciones" }, "Informaci\u00F3n y comunicaciones"),
                        h("option", { value: "construccion" }, "Construcci\u00F3n"),
                        h("option", { value: "agricultura_ganaderia_afines" }, "Agricultura, ganader\u00EDa, caza, silvicultura y pesca"),
                        h("option", { value: "actividades_profesionales" }, "Actividades profesionales, cient\u00EDficas y t\u00E9cnicas; actividades de servicios administrativos y de apoyo"),
                        h("option", { value: "actividades_inmobiliarias" }, "Actividades inmobiliarias"),
                        h("option", { value: "actividades_artisticas" }, "Actividades art\u00EDsticas, de entretenimiento y recreaci\u00F3n y otras actividades de servicios."),
                        h("option", { value: "administracion_publica" }, "Administraci\u00F3n p\u00FAblica y defensa; planes de seguridad social de afiliaci\u00F3n obligatoria; educaci\u00F3n; actividades de atenci\u00F3n de la salud humana y de servicios sociales"),
                        h("option", { value: "explotacion_de_minas" }, "Explotaci\u00F3n de minas y canteras"),
                        h("option", { value: "suministro_servicios" }, "Suministro de electricidad, gas, vapor y aire acondicionado; distribuci\u00F3n de agua; evacuaci\u00F3n y tratamiento de aguas residuales, gesti\u00F3n de desechos y actividades de saneamiento ambiental")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('point') > -1, label: "Tiene punto de venta presencial (f\u00EDsico)", value: this.model.point, onSelectChange: ev => this._setModel('point', ev.detail) },
                        h("option", { value: "si" }, "SI"),
                        h("option", { value: "no" }, "NO")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('onlineShop') > -1, label: "Tiene medio de venta virtual", value: this.model.onlineShop, onSelectChange: ev => this._setModel('onlineShop', ev.detail) },
                        h("option", { value: "si" }, "SI"),
                        h("option", { value: "no" }, "NO")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('employees') > -1, label: "N\u00FAmero de empleados", value: this.model.employees, onSelectChange: ev => this._setModel('employees', ev.detail) },
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: "5" }, "5"),
                        h("option", { value: "6" }, "6"),
                        h("option", { value: "7" }, "7"),
                        h("option", { value: "8" }, "8"),
                        h("option", { value: "9" }, "9"),
                        h("option", { value: "10" }, "10"),
                        h("option", { value: ">10" }, "M\u00E1s de 10")))))),
              this.adminZone || (h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                this.viewRegistration ? ('') : (h("li", null,
                  h("emprender-cl-button", { text: "Actualizar", modifiers: "medium quaternary", onclick: () => this.upgradeInfo.emit(this.model) }))),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() }))))))))));
  }
  static get is() { return "emprender-uf-company-profile"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-company-profile.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-company-profile.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "CompanyInformation",
        "resolved": "CompanyInformation",
        "references": {
          "CompanyInformation": {
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
      "defaultValue": "{\r\n    companyName: '',\r\n    companyLocation: '',\r\n    address: '',\r\n    place: '',\r\n    departmentOfResidence: '',\r\n    cityOfResidence: '',\r\n    stratus: 4,\r\n    dwellingType: '',\r\n    rent: 0,\r\n    companyType: '',\r\n    nit: '',\r\n    foundatingDate: '',\r\n    companyActivity: '',\r\n    point: '',\r\n    onlineShop: '',\r\n    salePercentage: '',\r\n    employees: '',\r\n    destiny: '',\r\n    otherDestiny: '',\r\n  }"
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
    "viewRegistration": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "view-registration",
      "reflect": false,
      "defaultValue": "true"
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
        "original": "CompanyInformation",
        "resolved": "CompanyInformation",
        "references": {
          "CompanyInformation": {
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
        "original": "CompanyInformation",
        "resolved": "CompanyInformation",
        "references": {
          "CompanyInformation": {
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
        "original": "CompanyInformation",
        "resolved": "CompanyInformation",
        "references": {
          "CompanyInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
