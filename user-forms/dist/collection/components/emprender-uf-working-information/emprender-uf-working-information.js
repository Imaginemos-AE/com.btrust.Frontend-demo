import { Component, Host, h, State, Event } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
export class EmprenderUfWorkingInformation {
  constructor() {
    this.model = {
      companyName: "",
      position: "",
      companyType: "public",
      companySeniority: "",
      contractType: "",
      companyActivity: "",
      creditDestination: "",
      companyPhone: "",
      companyPhoneExtension: "",
      otherPhone: "",
    };
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
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
              h("h2", { class: "title" }, "Informaci\u00F3n Laboral"),
              h("h4", null, "Completa la siguiente informaci\u00F3n"),
              h("div", { class: "boxForm form p5" },
                h("div", { class: "row mb20" },
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Nombre de la empresa donde trabajas", onInputChange: (ev) => this._setModel("companyName", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Cargo en la empresa", onInputChange: (ev) => this._setModel("position", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", { class: "flex-center-center fieldtypeOfCompany" },
                      h("label", null, "Tipo de Empresa"),
                      h("ul", { class: "inline" },
                        h("li", null,
                          h("label", { class: "control control--checkbox" },
                            "P\u00FAblica",
                            h("input", { type: "radio", checked: this.model.companyType === "public", name: "radio3", onClick: () => this._setModel("companyType", "public") }),
                            h("div", { class: "control__indicator" }))),
                        h("li", null,
                          h("label", { class: "control control--checkbox" },
                            "Privada",
                            h("input", { type: "radio", checked: this.model.companyType === "private", name: "radio3", onClick: () => this._setModel("companyType", "private") }),
                            h("div", { class: "control__indicator" })))))),
                  h("div", { class: "col-md-3" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Antig\u00FCedad en la empresa", onSelectChange: (ev) => this._setModel("companySeniority", ev.detail) },
                        h("option", { value: "less_1_year" }, "Menos de 1 a\u00F1o")))),
                  h("div", { class: "col-md-3" },
                    h("fieldset", null,
                      h("label", null,
                        "Tipo de ",
                        h("span", null, "contrato")),
                      h("emprender-cl-select", { onSelectChange: (ev) => this._setModel("contractType", ev.detail) },
                        h("option", { value: "indefined" }, "Indefinido")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Actividad de la empresa", onSelectChange: (ev) => this._setModel("companyActivity", ev.detail) },
                        h("option", { value: "1" }, "Comercio al por mayor y al por menor; reparaci\u00F3n de veh\u00EDculos\u2026")))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-select", { label: "Destino del pr\u00E9stamo", onSelectChange: (ev) => this._setModel("creditDestination", ev.detail) },
                        h("option", { value: "1" }, "Compras personales")))),
                  h("div", { class: "col-md-4" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Tel\u00E9fono de la empresa", onInputChange: (ev) => this._setModel("companyPhone", ev.detail) }))),
                  h("div", { class: "col-md-2" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Extensi\u00F3n", onInputChange: (ev) => this._setModel("companyPhoneExtension", ev.detail) }))),
                  h("div", { class: "col-md-6" },
                    h("fieldset", null,
                      h("emprender-cl-input", { label: "Otro", inputOptions: { placeholder: "¿Cúal?" }, onInputChange: (ev) => this._setModel("otherPhone", ev.detail) })))),
                h("div", { class: "contcenter" },
                  h("emprender-cl-button", { text: "Continuar", modifiers: "medium primary", onclick: () => console.log(this.model) }))),
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
