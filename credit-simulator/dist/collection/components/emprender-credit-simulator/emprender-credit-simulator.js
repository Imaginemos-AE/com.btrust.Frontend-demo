import { Component, Host, h, State, Element } from '@stencil/core';
import { getBoundaries } from '../../modules/credit-simulator.module';
import state, { getConfigurationById, getCreditConfigurations, setCreditInfo, setCurrentConfiguration } from '../../store/credit-simulator.store';
import { capitalize, formatNumber, loadCSS, loadScript } from '../../utils/utils';
import { DEFAULT_CURRENCY_VALUES, DEFAULT_SLIDER_VALUES, termFormatter } from './emprender-credit-simulator-util';
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
    /** load credit configurations */
    await getCreditConfigurations();
    this._loadDefaultConfig();
  }
  componentDidLoad() {
    const element = this.host.shadowRoot.querySelectorAll('[data-toggle="tooltip"]');
    const container = this.host.shadowRoot.querySelector('.details');
    $(element).tooltip({
      container: container
    });
  }
  _loadDefaultConfig() {
    this._creditTypeChange(1); // default configuration
  }
  _sliderChange(field, data) {
    setCreditInfo({ [`credit${capitalize(field)}`]: data.value });
  }
  _creditTypeChange(creditTypeId) {
    this._calculateBoundaries(creditTypeId);
    setCurrentConfiguration(creditTypeId);
  }
  _calculateBoundaries(creditTypeId) {
    const boundaries = getBoundaries(getConfigurationById(creditTypeId));
    this.sliderValues = this.sliderValues.map(_sliderValue => {
      const [minKey, maxKey] = ['min', 'max'].map(_s => `${_s}${capitalize(_sliderValue.key)}`);
      return Object.assign(Object.assign({}, _sliderValue), { max: boundaries[maxKey], min: boundaries[minKey] });
    });
    this.sliderValues.forEach(_sliderValue => {
      const slider = this.host.shadowRoot.querySelector(`emprender-cs-slider#${_sliderValue.key}`);
      slider === null || slider === void 0 ? void 0 : slider.updateBoundaries(_sliderValue.min, _sliderValue.max, _sliderValue.formatter(_sliderValue.min), _sliderValue.formatter(_sliderValue.max));
    });
    /** avoid boundaries overflow */
    const overflowFields = this.sliderValues.reduce((fields, _sliderValue) => {
      const [minKey, maxKey] = ['min', 'max'].map(_s => `${_s}${capitalize(_sliderValue.key)}`);
      const creditValue = state.currentCreditInfo[`credit${capitalize(_sliderValue.key)}`];
      const val = creditValue > boundaries[maxKey] ? boundaries[maxKey]
        : (creditValue < boundaries[minKey] ? boundaries[minKey] : -1);
      if (val === -1)
        return fields;
      return Object.assign(Object.assign({}, fields), { [`credit${capitalize(_sliderValue.key)}`]: val });
    }, {});
    if (Object.keys(overflowFields).length !== 0)
      setCreditInfo(overflowFields);
  }
  renderTotal() {
    return `${termFormatter(state.currentCreditInfo.creditTerm)} de ${formatNumber(state.currentCreditInfo.creditTotal)}`;
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
                  h("input", { type: "radio", checked: state.currentCreditInfo.creditTypeId === 1, name: "radio3", onClick: () => this._creditTypeChange(1) }),
                  h("div", { class: "control__indicator" }))),
              h("li", null,
                h("label", { class: "control control--checkbox" },
                  "Empresario / Independiente",
                  h("input", { type: "radio", checked: state.currentCreditInfo.creditTypeId === 2, name: "radio3", onClick: () => this._creditTypeChange(2) }),
                  h("div", { class: "control__indicator" }))))),
          this.sliderValues.map(_sliderValue => h("emprender-cs-slider", { id: _sliderValue.key, label: _sliderValue.label, min: _sliderValue.min, minLabel: _sliderValue.formatter(_sliderValue.min), max: _sliderValue.max, maxLabel: _sliderValue.formatter(_sliderValue.max), step: _sliderValue.step, value: state.currentCreditInfo[`credit${capitalize(_sliderValue.key)}`], formatter: _sliderValue.formatter, onSliderChange: (event) => this._sliderChange(_sliderValue.key, event.detail) })),
          h("p", { class: "total" }, this.renderTotal()),
          h("p", { class: "small" }, "Este valor corresponde a una simulaci\u00F3n de tu cr\u00E9dito seg\u00FAn los datos seleccionados por ti."),
          h("div", { class: "details" }, this.currencyValues.map(_currencyValue => {
            var _a;
            return h("emprender-cs-item", { text: _currencyValue.label, subText: _currencyValue.subLabel, value: (_a = state.currentCreditInfo[`credit${capitalize(_currencyValue.key)}`]) !== null && _a !== void 0 ? _a : 0, space: _currencyValue.space }, _currencyValue.tooltip &&
              h("emprender-cl-icon", { "data-toggle": "tooltip", "data-placement": "top", title: _currencyValue.tooltip, class: "tooltipWhite", icon: "info" }));
          })),
          h("div", { class: "contcenter" },
            h("emprender-cl-button", { text: "Solicita tu cr\u00E9dito", modifiers: "medium primary", onclick: () => console.log('Credit Info', state.currentCreditInfo) }))))));
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
