import { Component, Host, h, State } from '@stencil/core';
import state, { getCreditConfigurations, loadDefaultData, setCreditInfo } from '../../store/credit-simulator.store';
import { formatNumber, loadCSS, loadScript } from '../../utils/utils';
import { getAmountBoundaries, getTermBoundaries } from '../../modules/credit-simulator.module';
const AMOUNT_STEP = 10000;
function termStep(typeOfTerm) {
  if (typeOfTerm === 'daily') {
    return 1;
  }
  else {
    return 30;
  }
}
export class EmprenderMiniCalculator {
  constructor() {
    this.showButtons = false;
    this.displayElement = false;
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', 'popperjs', 'text/javascript');
    await loadScript('https://code.jquery.com/jquery-3.6.0.min.js', 'jquery', 'text/javascript');
    await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js', 'bootstrap', 'text/javascript');
    await loadScript('https://imaginemos-ae.github.io/com.btrust.Frontend-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    /** load credit configurations */
    await getCreditConfigurations();
    this._loadDefaultConfig();
    this.displayElement = !!state.currentCofiguration;
  }
  _loadDefaultConfig() {
    loadDefaultData();
  }
  _toggleButtons() {
    this.showButtons = !this.showButtons;
  }
  setCurrentAmount(operation) {
    const boundaries = getAmountBoundaries(state.currentCofiguration);
    let newValue = state.currentCreditInfo.creditAmount + (operation === 'increase' ? (0 + AMOUNT_STEP) : (0 - AMOUNT_STEP));
    if (newValue <= boundaries.maxAmount && newValue >= boundaries.minAmount) {
      setCreditInfo({ creditAmount: newValue });
    }
    // check term boundaries
    const termBoundaries = getTermBoundaries(state.currentCreditInfo.creditAmount, state.currentCofiguration);
    if (state.currentCreditInfo.creditTerm > termBoundaries.maxTerm || state.currentCreditInfo.creditTerm < termBoundaries.minTerm) {
      setCreditInfo({ creditTerm: termBoundaries.minTerm });
    }
  }
  setCurrentTerm(operation) {
    const boundaries = getTermBoundaries(state.currentCreditInfo.creditAmount, state.currentCofiguration);
    const creditStep = termStep(boundaries.typeOfTerm);
    let newValue = state.currentCreditInfo.creditTerm + (operation === 'increase' ? (0 + creditStep) : (0 - creditStep));
    if (newValue <= boundaries.maxTerm && newValue >= boundaries.minTerm) {
      setCreditInfo({ creditTerm: newValue });
    }
  }
  onMouseAmountDown(operation) {
    this.pressTimer = setTimeout(() => {
      this.setCurrentAmount(operation);
      this.pressInterval = setInterval(() => {
        this.setCurrentAmount(operation);
      }, 100);
    }, 400);
  }
  onMouseAmountUp() {
    clearInterval(this.pressInterval);
    clearTimeout(this.pressTimer);
  }
  renderMiniCalculator() {
    if (this.displayElement) {
      return h("div", { class: "calculator" },
        h("div", { class: "item" },
          h("div", null,
            h("p", { class: "text" }, "Monto solicitado"),
            h("p", { class: "value" }, formatNumber(state.currentCreditInfo.creditAmount)),
            h("div", { class: {
                'control': true,
                'show': this.showButtons
              } },
              h("a", { onClick: () => this.setCurrentAmount("increase"), onMouseUp: () => this.onMouseAmountUp(), onMouseDown: () => this.onMouseAmountDown('increase') },
                h("emprender-cl-icon", { icon: "plus" })),
              h("a", { onClick: () => this.setCurrentAmount("decrease"), onMouseUp: () => this.onMouseAmountUp(), onMouseDown: () => this.onMouseAmountDown('decrease') },
                h("emprender-cl-icon", { icon: "minus" }))))),
        h("div", { class: "item" },
          h("div", null,
            h("p", { class: "text" }, "Plazo"),
            h("p", { class: "value" },
              state.currentCreditInfo.creditTerm,
              " Dias"),
            h("div", { class: {
                'control': true,
                'show': this.showButtons
              } },
              h("a", { onClick: () => this.setCurrentTerm("increase") },
                h("emprender-cl-icon", { icon: "plus" })),
              h("a", { onClick: () => this.setCurrentTerm("decrease") },
                h("emprender-cl-icon", { icon: "minus" }))))),
        h("div", { class: "item totaldiv" },
          h("div", null,
            h("p", { class: "total" },
              "Total a pagar: ",
              h("span", null, formatNumber(state.currentCreditInfo.creditTotal)),
              h("button", { type: "button", "data-container": ".calculator", "data-placement": "bottom", "data-html": "true", "data-toggle": "popover", "data-content": '<div class="detailsPopOver"><div class="line"><label>Monto solicitado:</label><p class="value">$380.000</p></div><div class="line"><label>Intereses<span>(25% EA)</span></label><p class="value">$ 6.174</p></div><div class="line"><label>Aval <span>(opcional)</span></label><p class="value">$ 60.594</p></div><div class="line"><label>Plataforma<span>(opcional)</span></label><p class="value">$ 112.500</p></div><div class="line"><label>Descuento<span>(por inclusi\u00F3n financiera)</span></label><p class="value">$ -80.000</p></div><div class="line"><label>IVA <span>(19%)</span></label><p class="value">$ 6.175</p></div><div class="line"><label>Total</label><p class="value">$ 485.443</p></div></div>', class: "btnInfoPopover" },
                h("i", { class: "icon-info" }))),
            h("emprender-cl-button", { text: "Modificar", modifiers: `xsmall ${screen.width > 991 ? "primary" : "secondary"}`, onclick: () => this._toggleButtons() }))));
    }
  }
  render() {
    return (h(Host, null, this.renderMiniCalculator()));
  }
  static get is() { return "emprender-mini-calculator"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-mini-calculator.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-mini-calculator.css"]
  }; }
  static get states() { return {
    "showButtons": {},
    "displayElement": {}
  }; }
}
