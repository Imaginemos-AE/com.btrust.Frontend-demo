import { Component, Host, h, State, Element } from '@stencil/core';
import { formatNumber, loadCSS, loadScript } from '../../utils/utils';
import { DEFAULT_CURRENCY_VALUES, DEFAULT_SLIDER_VALUES } from './emprender-credit-simulator-util';
export class EmprenderCreditSimulator {
  constructor() {
    this.sliderValues = [...(DEFAULT_SLIDER_VALUES.map(_item => (Object.assign({}, _item))))];
    this.currencyValues = [...(DEFAULT_CURRENCY_VALUES.map(_item => (Object.assign({}, _item))))];
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'popperjs', 'text/javascript');
    await loadScript('https://code.jquery.com/jquery-3.6.0.min.js', 'jquery', 'text/javascript');
    await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js', 'bootstrap', 'text/javascript');
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/bootstrap-slider/11.0.2/bootstrap-slider.min.js', 'bootstrap-slider', 'text/javascript');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  componentDidLoad() {
    const element = this.host.shadowRoot.querySelectorAll('[data-toggle="tooltip"]');
    const container = this.host.shadowRoot.querySelector('.details');
    $(element).tooltip({
      container: container
    });
  }
  render() {
    return (h(Host, null,
      h("div", { class: "creditSimulator" },
        h("h2", { class: "title" }, "Calcula tu cr\u00E9dito en l\u00EDnea ya"),
        h("div", { class: "box" },
          h("fieldset", { class: "flex-center-center" },
            h("label", null, "Soy"),
            h("ul", { class: "inline" },
              h("li", null,
                h("label", { class: "control control--checkbox" },
                  "Empleado",
                  h("input", { type: "radio", checked: true, name: "radio3" }),
                  h("div", { class: "control__indicator" }))),
              h("li", null,
                h("label", { class: "control control--checkbox" },
                  "Empresario / Independiente",
                  h("input", { type: "radio", name: "radio3" }),
                  h("div", { class: "control__indicator" }))))),
          this.sliderValues.map(_sliderValue => h("emprender-cs-slider", { label: _sliderValue.label, min: _sliderValue.min, minLabel: _sliderValue.labelType === 'currency' ? formatNumber(_sliderValue.min) : `${_sliderValue.min} DIAS`, max: _sliderValue.max, maxLabel: _sliderValue.labelType === 'currency' ? formatNumber(_sliderValue.max) : `${_sliderValue.max} DIAS`, step: _sliderValue.step, value: _sliderValue.value })),
          h("p", { class: "total" },
            "Total a pagar: ",
            h("span", null, "$485.443")),
          h("p", { class: "small" }, "Este valor corresponde a una simulaci\u00F3n de tu cr\u00E9dito seg\u00FAn los datos seleccionados por ti."),
          h("div", { class: "details" }, this.currencyValues.map(_currencyValue => h("emprender-cs-item", { text: _currencyValue.label, subText: _currencyValue.subLabel, value: _currencyValue.value, space: _currencyValue.space }, _currencyValue.tooltip &&
            h("emprender-cl-icon", { "data-toggle": "tooltip", "data-placement": "top", title: _currencyValue.tooltip, class: "tooltipWhite", icon: "info" })))),
          h("div", { class: "contcenter" },
            h("emprender-cl-button", { text: "Solicita tu cr\u00E9dito", modifiers: "medium primary", onclick: (e) => console.log('output', e) }))))));
  }
  static get is() { return "emprender-credit-simulator"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-credit-simulator.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-credit-simulator.css"]
  }; }
  static get states() { return {
    "sliderValues": {},
    "currencyValues": {}
  }; }
  static get elementRef() { return "host"; }
}
