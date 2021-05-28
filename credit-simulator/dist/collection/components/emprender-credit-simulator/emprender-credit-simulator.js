import { Component, Host, h, State, Element } from '@stencil/core';
import { getAmountBoundaries, getTermBoundaries } from '../../modules/credit-simulator.module';
import state, { getConfigurationById, getCreditConfigurations, setCreditInfo, setCurrentConfiguration } from '../../store/credit-simulator.store';
import { capitalize, formatNumber, loadCSS, loadScript } from '../../utils/utils';
import { DEFAULT_CURRENCY_VALUES, DEFAULT_SLIDER_VALUES, termFormatter } from './emprender-credit-simulator-util';
export class EmprenderCreditSimulator {
  constructor() {
    this.sliderValues = [...(DEFAULT_SLIDER_VALUES.map(_item => (Object.assign({}, _item))))];
    this.currencyValues = [...(DEFAULT_CURRENCY_VALUES.map(_item => (Object.assign({}, _item))))];
    this.termSliderOrder = 'daily';
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
    this._creditTypeChange(1, false); // default configuration
  }
  _sliderChange(field, data) {
    setCreditInfo({ [`credit${capitalize(field)}`]: data.value });
    if (field === 'amount') {
      const sliderConfig = this.sliderValues.find(_sliderConfig => _sliderConfig.key === 'term');
      if (sliderConfig)
        this.calculateFieldBoundaries(sliderConfig, state.currentCreditInfo.creditTypeId);
    }
  }
  _creditTypeChange(creditTypeId, avoidBoundaries = true) {
    this._calculateBoundaries(creditTypeId, avoidBoundaries);
    setCurrentConfiguration(creditTypeId);
  }
  _calculateBoundaries(creditTypeId, avoidBoundaries) {
    this.sliderValues.forEach(_sliderValue => this.calculateFieldBoundaries(_sliderValue, creditTypeId, avoidBoundaries));
  }
  calculateFieldBoundaries(sliderConfig, creditTypeId, avoidBoundaries = true) {
    // get new boundaries for field
    const boundaries = this.getFieldBoundaries(sliderConfig.key, creditTypeId);
    if (boundaries.typeOfTerm)
      this.termSliderOrder = boundaries.typeOfTerm;
    // set new boundaries for field
    const sliderConfigIndex = this.sliderValues.indexOf(sliderConfig);
    const [minKey, maxKey] = ['min', 'max'].map(_s => `${_s}${capitalize(sliderConfig.key)}`);
    const newSliderValue = Object.assign(Object.assign({}, sliderConfig), { max: boundaries[maxKey], min: boundaries[minKey] });
    this.sliderValues.splice(sliderConfigIndex, 1, newSliderValue);
    this.sliderValues = [...this.sliderValues];
    // set field slider values
    const slider = this.host.shadowRoot.querySelector(`emprender-cs-slider#${sliderConfig.key}`);
    slider === null || slider === void 0 ? void 0 : slider.updateBoundaries(newSliderValue.min, newSliderValue.max, (typeof newSliderValue.step === 'number') ? newSliderValue.step : newSliderValue.step(this.termSliderOrder), newSliderValue.formatter(newSliderValue.min), newSliderValue.formatter(newSliderValue.max));
    /** avoid boundaries overflow */
    if (avoidBoundaries) {
      const creditValue = state.currentCreditInfo[`credit${capitalize(sliderConfig.key)}`];
      const overflowValue = creditValue > boundaries[maxKey] ? boundaries[maxKey]
        : (creditValue < boundaries[minKey] ? boundaries[minKey] : -1);
      if (overflowValue !== -1)
        setCreditInfo({ [`credit${capitalize(sliderConfig.key)}`]: overflowValue });
    }
  }
  getFieldBoundaries(field, creditTypeId) {
    const creditConfig = getConfigurationById(creditTypeId);
    return field === 'amount' ? getAmountBoundaries(creditConfig) : getTermBoundaries(state.currentCreditInfo.creditAmount, creditConfig);
  }
  renderTotal() {
    if (this.termSliderOrder === 'daily') {
      return `Pago total: ${formatNumber(state.currentCreditInfo.creditTotal)}`;
    }
    else {
      return `${termFormatter(state.currentCreditInfo.creditTerm)} de ${formatNumber(state.currentCreditInfo.creditTotal)}`;
    }
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
          this.sliderValues.map(_sliderValue => h("emprender-cs-slider", { id: _sliderValue.key, label: _sliderValue.label, min: _sliderValue.min, minLabel: _sliderValue.formatter(_sliderValue.min), max: _sliderValue.max, maxLabel: _sliderValue.formatter(_sliderValue.max), step: (typeof _sliderValue.step === 'number') ? _sliderValue.step : _sliderValue.step(this.termSliderOrder), value: state.currentCreditInfo[`credit${capitalize(_sliderValue.key)}`], formatter: _sliderValue.formatter, onSliderChange: (event) => this._sliderChange(_sliderValue.key, event.detail) })),
          h("p", { class: "total" }, this.renderTotal()),
          h("p", { class: "small" }, "Este valor corresponde a una simulaci\u00F3n de tu cr\u00E9dito seg\u00FAn los datos seleccionados por ti."),
          h("div", { class: "details" }, this.currencyValues.map(_currencyValue => {
            var _a;
            return h("emprender-cs-item", { text: (typeof _currencyValue.label === 'string') ? _currencyValue.label : _currencyValue.label(this.termSliderOrder), subText: _currencyValue.subLabel, value: (_a = state.currentCreditInfo[`credit${capitalize(_currencyValue.key)}`]) !== null && _a !== void 0 ? _a : 0, space: _currencyValue.space }, _currencyValue.tooltip &&
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
    "currencyValues": {},
    "termSliderOrder": {}
  }; }
  static get elementRef() { return "host"; }
}
