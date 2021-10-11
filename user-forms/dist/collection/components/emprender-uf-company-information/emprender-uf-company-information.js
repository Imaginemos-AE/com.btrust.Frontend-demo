import { Component, Host, h, State, Event, Prop, Element } from '@stencil/core';
import { checkData } from '../../module/validation';
import { COUNTRY } from '../../utils/country';
import { FINANCIAL_OPTIONS } from '../../module/helper';
import state from '../../module/store';
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
  // _setLocationInformation(value: string) {
  //   const fields = ['cityOfResidence', 'departmentOfResidence', 'address', 'place', 'stratus', 'dwellingType', 'rent'];
  //   if (value === 'si') {
  //     const personalInformation2 = state.currentUserInformation['personalInformation2'];
  //     fields.forEach(e => this._setModel(e, personalInformation2[e]));
  //   } else {
  //     fields.forEach(e => e==="rent"?  this._setModel(e,"0") : e==="stratus"? this._setModel(e,"4") :this._setModel(e,""));
  //   }
  // }
  componentWillRender() {
    const fields = ['cityOfResidence', 'departmentOfResidence', 'address', 'place', 'stratus', 'dwellingType', 'rent'];
    if (this.model.companyLocation === 'si') {
      const personalInformation2 = state.currentUserInformation['personalInformation2'];
      fields.forEach(e => this._setModel(e, personalInformation2[e]));
    }
    else {
      fields.forEach(e => (e === 'rent' ? this._setModel(e, '0') : e === 'stratus' ? this._setModel(e, '4') : this._setModel(e, '')));
    }
  }
  _changeLocationInformation(field, value) {
    state.currentUserInformation['personalInformation2'][field] = value;
  }
  _checkSubmitInfo() {
    let lista = checkData(this.model);
    if (lista.indexOf('rent') > -1 && this.model.dwellingType !== 'arrendada') {
      lista.splice(lista.indexOf('rent'), 1);
    }
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
              h("h2", { class: "title" }, "Informaci\u00F3n de la empresa/negocio"),
              h("h4", null, "Completa la siguiente informaci\u00F3n"),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row" },
                  h("div", { class: "col-lg-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('companyName') > -1, label: "Nombre de la empresa/negocio", value: this.model.companyName, onInputChange: ev => this._setModel('companyName', ev.detail) }))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('companyLocation') > -1, label: "\u00BFLa ubicaci\u00F3n de la empresa es la misma de la vivienda?", value: this.model.companyLocation, onSelectChange: ev => {
                          this._setModel('companyLocation', ev.detail);
                        } },
                        h("option", { value: "si" }, "SI"),
                        h("option", { value: "no" }, "NO")))),
                  h("div", { class: "col-lg-6" },
                    h("fieldset", { class: "mb0" },
                      h("label", null, this.model.companyLocation === 'si' ? 'Departamento y ciudad de residencia' : 'Departamento y ciudad de residencia del negocio'),
                      h("div", { class: "row" },
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { checkData: this.requiredData.indexOf('departmentOfResidence') > -1, value: this.model.departmentOfResidence, options: this._getSelectDepartmentOptions(), onSelectChange: ev => {
                                if (this.model.companyLocation === 'si')
                                  this._changeLocationInformation('departmentOfResidence', ev.detail);
                                this._selectDropdownOption('departmentOfResidence', ev.detail, 'cityOfResidence');
                              } }))),
                        h("div", { class: "col-6" },
                          h("fieldset", null,
                            h("emprender-cl-select", { checkData: this.requiredData.indexOf('cityOfResidence') > -1, value: this.model.cityOfResidence, options: this._getSelectCitiesOptions('departmentOfResidence'), onSelectChange: ev => {
                                if (this.model.companyLocation === 'si')
                                  this._changeLocationInformation('cityOfResidence', ev.detail);
                                this._setModel('cityOfResidence', ev.detail);
                              } })))))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { typeAddress: true, 
                        // ref={( el )=>{ el = this.model.address}}
                        checkData: this.requiredData.indexOf('address') > -1, label: this.model.companyLocation === 'si' ? 'Dirección de la vivienda' : 'Dirección del negocio', value: this.model.address, id: "direccion", onInputChange: ev => {
                          if (this.model.companyLocation === 'si')
                            this._changeLocationInformation('address', ev.detail);
                          this._setModel('address', ev.detail);
                        } }))),
                  h("div", { class: "col-lg-3 col-sm-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumericoOpcional", label: "Torre/ Apto/ Conjunto", checkData: this.requiredData.indexOf('place') > -1, value: this.model.place, onInputChange: ev => {
                          if (this.model.companyLocation === 'si')
                            this._changeLocationInformation('place', ev.detail);
                          this._setModel('place', ev.detail);
                        } }))),
                  h("div", { class: "col-lg-3 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('stratus') > -1, label: "Estrato", value: this.model.stratus, onSelectChange: ev => {
                          if (this.model.companyLocation === 'si')
                            this._changeLocationInformation('stratus', ev.detail);
                          this._setModel('stratus', ev.detail);
                        } },
                        h("option", { value: "1" }, "1"),
                        h("option", { value: "2" }, "2"),
                        h("option", { value: "3" }, "3"),
                        h("option", { value: "4" }, "4"),
                        h("option", { value: "5" }, "5"),
                        h("option", { value: "6" }, "6")))),
                  h("div", { class: "col-lg-5 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('dwellingType') > -1, label: this.model.companyLocation === 'si' ? 'Tipo de vivienda' : 'Tenencia de local', value: this.model.dwellingType, onSelectChange: ev => {
                          if (this.model.companyLocation === 'si')
                            this._changeLocationInformation('dwellingType', ev.detail);
                          this._setModel('dwellingType', ev.detail);
                          if (this.model.dwellingType !== 'arrendada') {
                            if (this.model.companyLocation === 'si')
                              this._changeLocationInformation('rent', '0');
                            this._setModel('rent', '0');
                          }
                        } },
                        h("option", { value: "propia" }, "Propia"),
                        h("option", { value: "arrendada" }, "Arrendada"),
                        h("option", { value: "familiar" }, "Familiar"),
                        h("option", { value: "otro" }, "Otro")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { inputOptions: this.model.dwellingType !== 'arrendada' ? { disabled: '{this.disabled}' } : {}, dataType: this.model.dwellingType === 'arrendada' ? 'arriendo' : '', checkData: this.model.dwellingType === 'arrendada' && this.model.rent < 1000, label: "\u00BFCu\u00E1nto pagas por arriendo?", value: this.model.rent, maskOptions: FINANCIAL_OPTIONS, onInputChange: ev => {
                          if (this.model.companyLocation === 'si')
                            this._changeLocationInformation('rent', ev.detail);
                          this._setModel('rent', ev.detail);
                        } }))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('companyType') > -1, label: "Tipo de empresa", value: this.model.companyType, onSelectChange: ev => this._setModel('companyType', ev.detail) },
                        h("option", { value: "unipersonal" }, "Unipersonal"),
                        h("option", { value: "s.a.s" }, "S.A.S"),
                        h("option", { value: "ltda" }, "Ltda"),
                        h("option", { value: "s.a" }, "S.A."),
                        h("option", { value: "s_en_c" }, "S. en C."),
                        h("option", { value: "s.c.a" }, "S.C.A.")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "numerico", checkData: this.requiredData.indexOf('nit') > -1, label: "NIT", value: this.model.nit, onInputChange: ev => this._setModel('nit', ev.detail) }))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('foundatingDate') > -1, label: "Fecha de constituci\u00F3n", value: this.model.foundatingDate, inputOptions: { type: 'date' }, onInputChange: ev => this._setModel('foundatingDate', ev.detail) }))),
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
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('salePercentage') > -1, label: "Porcentaje de ventas presenciales", value: this.model.salePercentage, onSelectChange: ev => this._setModel('salePercentage', ev.detail) },
                        h("option", { value: "<25" }, "Menos de 25%"),
                        h("option", { value: "25-50" }, "Entre 25% y 50%"),
                        h("option", { value: "50-75" }, "Entre 50% y 75%"),
                        h("option", { value: ">75" }, "M\u00E1s de 75%")))),
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
                        h("option", { value: ">10" }, "M\u00E1s de 10")))),
                  h("div", { class: "col-lg-4 col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('destiny') > -1, label: "Destino del pr\u00E9stamo", value: this.model.destiny, onSelectChange: ev => this._setModel('destiny', ev.detail) },
                        h("option", { value: "capital_de_trabajo" }, "Capital de trabajo"),
                        h("option", { value: "compra_de_activos" }, "Compra de activos"),
                        h("option", { value: "pago_de_arriendo-servicios_publicos" }, "Pago de arriendo/servicios p\u00FAblicos"),
                        h("option", { value: "pago_de_pr\u00E9stamos" }, "Pago de pr\u00E9stamos"),
                        h("option", { value: "gastos_del_hogar" }, "Gastos del hogar"),
                        h("option", { value: "gastos_personales" }, "Gastos personales"),
                        h("option", { value: "emergencia_del_negocio" }, "Emergencia del negocio"),
                        h("option", { value: "emergencia_familiar" }, "Emergencia familiar"),
                        h("option", { value: "otro" }, "Otro")))),
                  this.model.destiny === 'otro' && (h("div", { class: "col-12" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumericoOpcional", checkData: this.requiredData.indexOf('otherDestiny') > -1, label: "Otro destino del pr\u00E9stamo", inputOptions: { placeholder: '¿Cúal?' }, value: this.model.otherDestiny, onInputChange: ev => this._setModel('otherDestiny', ev.detail) })))))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() })))))))));
  }
  static get is() { return "emprender-uf-company-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-company-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-company-information.css"]
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
    }]; }
  static get elementRef() { return "host"; }
}
