import { Component, Host, h, Event, State } from '@stencil/core';
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
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  render() {
    return (h(Host, null,
      h("section", { class: "employeeRegistration" },
        h("div", { class: "container" },
          h("div", { class: "row justify-content-center" },
            h("div", { class: "col" },
              h("h2", { class: "title" }, "Referencias"),
              h("h4", null, "Completa la siguiente informaci\u00F3n"),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row mb20" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Nombre contacto familiar", onInputChange: (ev) => this._setModel("familyContactName", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Tel\u00E9fono contacto familiar", onInputChange: (ev) => this._setModel("familyContactPhone", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Relaci\u00F3n", onInputChange: (ev) => this._setModel("familyContactRelationship", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Nombre contacto comercial/amigo", onInputChange: (ev) => this._setModel("friendContactName", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Tel\u00E9fono contacto comercial/amigo", onInputChange: (ev) => this._setModel("friendContactPhone", ev.detail) })),
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Relaci\u00F3n", onInputChange: (ev) => this._setModel("friendContactRelationship", ev.detail) })))),
                h("div", { class: "contcenter" },
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
  static get states() { return {
    "model": {}
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
    }]; }
}
