import { Component, Host, h, Event, Prop } from '@stencil/core';
import { checkData } from '../../module/validation';
export class EmprenderUfReferences {
  constructor() {
    this.model = {
      familyContactName: '',
      familyContactPhone: '',
      familyContactRelationship: '',
      friendContactName: '',
      friendContactPhone: '',
      friendContactRelationship: '',
    };
    this.viewRegistration = true;
    this.requiredData = '';
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  _checkSubmitInfo() {
    console.log('dato: ' + this.flow);
    const lista = checkData(this.model);
    if (lista.length === 0) {
      this.infoSaved.emit(this.model);
    }
    this.requiredData = lista.toString();
  }
  _getSecondTitle() {
    if (this.flow === 'independent') {
      return this.viewRegistration ? 'Referencia Comercial' : '3. Referencia Comercial';
    }
    else {
      return this.viewRegistration ? 'Referencia Familiar' : '3. Referencia Personal';
    }
  }
  render() {
    return (h(Host, null,
      h("section", { class: this.viewRegistration ? 'employeeRegistration' : 'clientForms' },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("h2", { class: "title" }, this.viewRegistration ? 'Referencia Familiar' : '3. Referencia Familiar'),
              this.viewRegistration ? h("h4", null, "Completa la siguiente informaci\u00F3n") : '',
              h("div", { class: "boxForm form p5" },
                h("fieldset", null,
                  h("emprender-cl-input", { checkData: this.requiredData.indexOf('familyContactName') > -1, label: "Nombre contacto familiar", value: this.model.familyContactName, onInputChange: ev => this._setModel('familyContactName', ev.detail) })),
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { checkData: this.requiredData.indexOf('familyContactPhone') > -1, label: "Tel\u00E9fono contacto familiar", value: this.model.familyContactPhone, onInputChange: ev => this._setModel('familyContactPhone', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { checkData: this.requiredData.indexOf('familyContactRelationship') > -1, label: "Relaci\u00F3n / Parentezco", value: this.model.familyContactRelationship, onInputChange: ev => this._setModel('familyContactRelationship', ev.detail) }))))),
              h("h2", { class: "title" }, this._getSecondTitle()),
              h("div", { class: "boxForm form p5" },
                h("fieldset", null,
                  h("emprender-cl-input", { checkData: this.requiredData.indexOf('friendContactName') > -1, label: this.flow === 'independent' ? 'Nombre contacto comercial' : 'Nombre contacto personal', value: this.model.friendContactName, onInputChange: ev => this._setModel('friendContactName', ev.detail) })),
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: this.flow === 'independent' ? 'Teléfono contacto comercial' : 'Teléfono contacto personal', checkData: this.requiredData.indexOf('friendContactPhone') > -1, value: this.model.friendContactPhone, onInputChange: ev => this._setModel('friendContactPhone', ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: this.flow === 'independent' ? 'Relación' : 'Relación / Parentezco', checkData: this.requiredData.indexOf('friendContactRelationship') > -1, value: this.model.friendContactRelationship, onInputChange: ev => this._setModel('friendContactRelationship', ev.detail) })))),
                this.requiredData.length === 0 ? (console.log(this.requiredData.length)) : (h("div", { class: "errorText" },
                  h("emprender-cl-icon", { icon: "alert", path: 0 }),
                  "Debes completar todos los campos marcados para poder continuar."))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                this.viewRegistration ? ('') : (h("li", null,
                  h("emprender-cl-button", { text: "Terminar", modifiers: "medium quaternary", onclick: () => this._checkSubmitInfo() }))),
                this.viewRegistration ? (h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this._checkSubmitInfo() }))) : ('')),
              h("slot", null)))))));
  }
  static get is() { return "emprender-uf-references"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-references.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-references.css"]
  }; }
  static get properties() { return {
    "model": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "References",
        "resolved": "References",
        "references": {
          "References": {
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
      "defaultValue": "{\r\n    familyContactName: '',\r\n    familyContactPhone: '',\r\n    familyContactRelationship: '',\r\n    friendContactName: '',\r\n    friendContactPhone: '',\r\n    friendContactRelationship: '',\r\n  }"
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
    },
    "flow": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "flow",
      "reflect": true
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
        "original": "References",
        "resolved": "References",
        "references": {
          "References": {
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
        "original": "References",
        "resolved": "References",
        "references": {
          "References": {
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
        "original": "References",
        "resolved": "References",
        "references": {
          "References": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
