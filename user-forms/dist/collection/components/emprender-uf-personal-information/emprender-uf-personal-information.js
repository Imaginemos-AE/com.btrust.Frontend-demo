import { Component, h, State } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
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
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  _setModel(field, value) {
    this.model = Object.assign(Object.assign({}, this.model), { [field]: value });
  }
  render() {
    return (h("section", { class: "employeeRegistration" },
      JSON.stringify(this.model),
      h("div", { class: "container" },
        h("div", { class: "row justify-content-center" },
          h("div", { class: "col" },
            h("h2", { class: "title" }, "Informaci\u00F3n Personal"),
            h("h4", null, "Completa la siguiente informaci\u00F3n"),
            h("div", { class: "boxForm form p5" },
              h("div", { class: "row mb20" },
                h("div", { class: "col-6" },
                  h("fieldset", null,
                    h("emprender-cl-input", { label: "Primer nombre", onInputChange: (ev) => this._setModel("firstName", ev.detail) }))),
                h("div", { class: "col-6" },
                  h("fieldset", null,
                    h("emprender-cl-input", { label: "Segundo nombre", onInputChange: (ev) => this._setModel("middleName", ev.detail) }))),
                h("div", { class: "col-6" },
                  h("fieldset", null,
                    h("emprender-cl-input", { label: "Primer apellido", onInputChange: (ev) => this._setModel("surName", ev.detail) }))),
                h("div", { class: "col-6" },
                  h("fieldset", null,
                    h("emprender-cl-input", { label: "Segundo apellido", onInputChange: (ev) => this._setModel("secondSurName", ev.detail) }))),
                h("div", { class: "col-md-6 col-lg-4" },
                  h("fieldset", null,
                    h("emprender-cl-select", { label: "Tipo de Documento", onSelectChange: (ev) => this._setModel("documentType", ev.detail) },
                      h("option", { value: "cedula_ciudadania" }, "C\u00E9dula de ciudadan\u00EDa"),
                      h("option", { value: "cedula_extranjeria" }, "C\u00E9dula de extranjer\u00EDa"),
                      h("option", { value: "nit" }, "NIT")))),
                h("div", { class: "col-md-6 col-lg-4" },
                  h("fieldset", null,
                    h("emprender-cl-input", { label: "N\u00FAmero de documento", onInputChange: (ev) => this._setModel("documentNumber", ev.detail) }))),
                h("div", { class: "col-lg-4" },
                  h("fieldset", null,
                    h("emprender-cl-input", { label: "Fecha de expedici\u00F3n", inputOptions: { type: 'date' }, onInputChange: (ev) => this._setModel("expeditionDate", ev.detail) }))),
                h("div", { class: "col-lg-6" },
                  h("fieldset", { class: "mb0" },
                    h("label", null, "Ciudad y departamento de expedici\u00F3n del documento"),
                    h("div", { class: "row" },
                      h("div", { class: "col-6" },
                        h("fieldset", null,
                          h("select", { class: "form-control" },
                            h("option", null, "Bogota")))),
                      h("div", { class: "col-6" },
                        h("fieldset", null,
                          h("select", { class: "form-control" },
                            h("option", null, "Cundinamarca"))))))),
                h("div", { class: "col-6 col-lg-3" },
                  h("fieldset", null,
                    h("label", null, "Celular"),
                    h("input", { type: "text", name: "", class: "text", value: "" }))),
                h("div", { class: "col-6 col-lg-3" },
                  h("fieldset", null,
                    h("label", null, "Tel\u00E9fono"),
                    h("input", { type: "text", name: "", class: "text", value: "" }))),
                h("div", { class: "col-md-6" },
                  h("fieldset", null,
                    h("label", null, "Correo electr\u00F3nico"),
                    h("input", { type: "text", name: "", class: "text", value: "" }))),
                h("div", { class: "col-md-6 col-lg-3" },
                  h("fieldset", null,
                    h("label", null, "Fecha de nacimiento"),
                    h("input", { type: "text", name: "", class: "text", value: "" }))),
                h("div", { class: "col-lg-3" },
                  h("fieldset", null,
                    h("label", null, "Nacionalidad"),
                    h("input", { type: "text", name: "", class: "text", value: "" }))),
                h("div", { class: "col-lg-6" },
                  h("fieldset", { class: "mb0" },
                    h("label", null, "Ciudad y departamento de nacimiento"),
                    h("div", { class: "row" },
                      h("div", { class: "col-6" },
                        h("fieldset", null,
                          h("select", { class: "form-control" },
                            h("option", null, "Bogota")))),
                      h("div", { class: "col-6" },
                        h("fieldset", null,
                          h("select", { class: "form-control" },
                            h("option", null, "Cundinamarca"))))))),
                h("div", { class: "col-lg-3" },
                  h("fieldset", null,
                    h("label", null, "G\u00E9nero"),
                    h("select", { class: "form-control" },
                      h("option", null, "Femenino"),
                      h("option", null, "Masculino"))))),
              h("div", { class: "contcenter" },
                h("a", { href: "3-informacion_personal2.html", class: "button medium primary" }, "Continuar"))),
            h("slot", null))))));
  }
  static get is() { return "emprender-uf-personal-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-uf-personal-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-uf-personal-information.css"]
  }; }
  static get states() { return {
    "model": {}
  }; }
}
