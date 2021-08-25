import { Component, Host, h, Event, Prop } from '@stencil/core';
export class EmprenderUfReferences {
  constructor() {
    this.model = {
      familyContactName: "",
      familyContactPhone: "",
      familyContactRelationship: "",
      friendContactName: "",
      friendContactPhone: "",
      friendContactRelationship: "",
    };
    this.viewRegistration = true;
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
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
                  h("emprender-cl-input", { label: "Nombre contacto familiar", value: this.model.familyContactName, onInputChange: (ev) => this._setModel("familyContactName", ev.detail) })),
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Tel\u00E9fono contacto familiar", value: this.model.familyContactPhone, onInputChange: (ev) => this._setModel("familyContactPhone", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Relaci\u00F3n / Parentezco", value: this.model.familyContactRelationship, onInputChange: (ev) => this._setModel("familyContactRelationship", ev.detail) }))))),
              h("h2", { class: "title" }, this.viewRegistration ? 'Referencia Familiar' : '3. Referencia Personal'),
              h("div", { class: "boxForm form p5" },
                h("fieldset", null,
                  h("emprender-cl-input", { label: "Nombre contacto personal", value: this.model.friendContactName, onInputChange: (ev) => this._setModel("friendContactName", ev.detail) })),
                h("div", { class: "row" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Tel\u00E9fono contacto personal", value: this.model.friendContactPhone, onInputChange: (ev) => this._setModel("friendContactPhone", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Relaci\u00F3n / Parentezco", value: this.model.friendContactRelationship, onInputChange: (ev) => this._setModel("friendContactRelationship", ev.detail) }))))),
              h("ul", { class: "inline flex-center-center mb20" },
                h("li", null,
                  h("emprender-cl-button", { text: "Anterior", modifiers: "medium tertiary", onclick: () => this.back.emit(this.model) })),
                this.viewRegistration ? '' : h("li", null,
                  h("emprender-cl-button", { text: "Terminar", modifiers: "medium quaternary", onclick: () => this.upgradeInfo.emit(this.model) })),
                h("li", null,
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => this.infoSaved.emit(this.model) }))),
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
      "defaultValue": "{\r\n    familyContactName: \"\",\r\n    familyContactPhone: \"\",\r\n    familyContactRelationship: \"\",\r\n    friendContactName: \"\",\r\n    friendContactPhone: \"\",\r\n    friendContactRelationship: \"\",\r\n  }"
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
