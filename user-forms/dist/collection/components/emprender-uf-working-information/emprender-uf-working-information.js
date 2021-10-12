import { Component, Host, h, Event, Prop } from '@stencil/core';
import { checkData } from '../../module/validation';
export class EmprenderUfWorkingInformation {
  constructor() {
    this.model = {
      companyName: '',
      position: '',
      companyType: 'public',
      companySeniority: '',
      contractType: '',
      companyActivity: '',
      creditDestination: '',
      companyPhone: '',
      companyPhoneExtension: '',
      otherPhone: '',
    };
    this.viewRegistration = true;
    this.requiredData = '';
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  _checkSubmitInfo() {
    const lista = checkData(this.model);
    if (this.model.creditDestination !== 'otro') {
      if (lista.indexOf('otherPhone') > -1)
        lista.splice(lista.indexOf('otherPhone'), 1);
      this._setModel('otherPhone', '');
    }
    if (lista.length === 0) {
      this.infoSaved.emit(this.model);
    }
    this.requiredData = lista.toString();
  }
  render() {
    return (h(Host, null,
      h("section", { class: this.viewRegistration ? 'employeeRegistration' : 'clientForms' },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("h2", { class: "title" }, this.viewRegistration ? 'Información Laboral' : '2. Información Laboral'),
              this.viewRegistration ? h("h4", null, "Completa la siguiente informaci\u00F3n") : '',
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row mb20" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "alfanumerico", checkData: this.requiredData.indexOf('companyName') > -1, label: "Nombre de la empresa donde trabajas", value: this.model.companyName, onInputChange: ev => this._setModel('companyName', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "texto", checkData: this.requiredData.indexOf('position') > -1, label: "Cargo en la empresa", value: this.model.position, onInputChange: ev => this._setModel('position', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", { class: "flex-center-center fieldtypeOfCompany" },
                      h("label", null, "Tipo de Empresa"),
                      h("ul", { class: "inline" },
                        h("li", null,
                          h("label", { class: "control control--checkbox" },
                            "P\u00FAblica",
                            h("input", { type: "radio", checked: this.model.companyType === 'public', name: "radio3", onClick: () => this._setModel('companyType', 'public') }),
                            h("div", { class: "control__indicator" }))),
                        h("li", null,
                          h("label", { class: "control control--checkbox" },
                            "Privada",
                            h("input", { type: "radio", checked: this.model.companyType === 'private', name: "radio3", onClick: () => this._setModel('companyType', 'private') }),
                            h("div", { class: "control__indicator" })))))),
                  h("div", { class: "col-md-3" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('companySeniority') > -1, label: "Antig\u00FCedad en la empresa", value: this.model.companySeniority, onSelectChange: ev => this._setModel('companySeniority', ev.detail) },
                        h("option", { value: "<1" }, `Menos de 1 año`),
                        h("option", { value: "1-2" }, `Entre 1 y 2 años`),
                        h("option", { value: "2-3" }, `Entre 2 y 3 años`),
                        h("option", { value: "3-4" }, `Entre 3 y 4 años`),
                        h("option", { value: "4-6" }, `Entre 4 y 5 años`),
                        h("option", { value: ">5" }, `Más de 5 años`)))),
                  h("div", { class: "col-md-3" },
                    h("fieldset", null,
                      h("label", null,
                        "Tipo de ",
                        h("span", null, "contrato")),
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('contractType') > -1, value: this.model.contractType, onSelectChange: ev => this._setModel('contractType', ev.detail) },
                        h("option", { value: "indefinido" }, "Indefinido"),
                        h("option", { value: "fijo" }, "Fijo"),
                        h("option", { value: "temporal" }, "Temporal"),
                        h("option", { value: "prestacion_servicios" }, "Prestaci\u00F3n de servicios")))),
                  h("div", { class: "col-md-6" },
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
                  h("div", { class: "col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "celular", checkData: this.requiredData.indexOf('companyPhone') > -1, label: "Tel\u00E9fono de la empresa", value: this.model.companyPhone, onInputChange: ev => this._setModel('companyPhone', ev.detail) }))),
                  h("div", { class: "col-md-2" },
                    h("fieldset", null,
                      h("emprender-cl-input", { dataType: "numericoOpcional", checkData: this.requiredData.indexOf('companyPhoneExtension') > -1, label: "Extensi\u00F3n", value: this.model.companyPhoneExtension, onInputChange: ev => this._setModel('companyPhoneExtension', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { checkData: this.requiredData.indexOf('creditDestination') > -1, label: "Destino del pr\u00E9stamo", value: this.model.creditDestination, onSelectChange: ev => this._setModel('creditDestination', ev.detail) },
                        h("option", { value: "compras_personales" }, "Compras personales"),
                        h("option", { value: "educacion" }, "Educaci\u00F3n"),
                        h("option", { value: "emergencia" }, "Emergencia"),
                        h("option", { value: "pago_servicios" }, "Pago de servicios p\u00FAblicos"),
                        h("option", { value: "pago_prestamos" }, "Pago de pr\u00E9stamos"),
                        h("option", { value: "gastos_diarios" }, "Gastos diarios"),
                        h("option", { value: "viaje" }, "Viaje"),
                        h("option", { value: "arriendo_hipoteca" }, "Arriendo/hipoteca"),
                        h("option", { value: "negocio_propio" }, "Negocio propio"),
                        h("option", { value: "otro" }, "Otro")))),
                  this.model.creditDestination === 'otro' && (h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { 
                        /////
                        dataType: this.model.creditDestination === 'otro' ? 'alfanumerico' : 'alfanumericoOpcional', checkData: this.requiredData.indexOf('otherPhone') > -1, label: "Otro destino del pr\u00E9stamo", value: this.model.otherPhone, inputOptions: { placeholder: '¿Cúal?' }, onInputChange: ev => this._setModel('otherPhone', ev.detail) }))))),
                this.requiredData.length === 0 ? null : (h("div", { class: "errorText" },
                  h("emprender-cl-icon", { icon: "alert", path: 0 }),
                  "Debes completar todos los campos marcados para poder continuar."))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                this.viewRegistration ? ('') : (h("li", null,
                  h("emprender-cl-button", { text: "Actualizar", modifiers: "medium quaternary", onclick: () => this.upgradeInfo.emit(this.model) }))),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() }))),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-working-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-working-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-working-information.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "WorkingInformation",
        "resolved": "WorkingInformation",
        "references": {
          "WorkingInformation": {
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
      "defaultValue": "{\r\n    companyName: '',\r\n    position: '',\r\n    companyType: 'public',\r\n    companySeniority: '',\r\n    contractType: '',\r\n    companyActivity: '',\r\n    creditDestination: '',\r\n    companyPhone: '',\r\n    companyPhoneExtension: '',\r\n    otherPhone: '',\r\n  }"
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
        "original": "WorkingInformation",
        "resolved": "WorkingInformation",
        "references": {
          "WorkingInformation": {
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
        "original": "WorkingInformation",
        "resolved": "WorkingInformation",
        "references": {
          "WorkingInformation": {
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
        "original": "WorkingInformation",
        "resolved": "WorkingInformation",
        "references": {
          "WorkingInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
