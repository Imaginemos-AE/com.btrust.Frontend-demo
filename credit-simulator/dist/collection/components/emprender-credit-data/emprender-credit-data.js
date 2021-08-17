import { h, Host, Component, State } from '@stencil/core';
import { CREDIT_DATA } from '../emprender-credit-simulator/emprender-credit-simulator-util';
import state from '../../store/credit-simulator.store';
import { capitalize, formatNumber } from '../../utils/utils';
export class EmprenderCreditSimulator {
  constructor() {
    this.currencyValues = [...CREDIT_DATA.map(_item => (Object.assign({}, _item)))];
  }
  getFieldSubLabel(subLabel) {
    if (subLabel) {
      return typeof subLabel === 'string' ? subLabel : subLabel(state.currentCreditInfo);
    }
  }
  getPayDay(days) {
    let today = new Date();
    let week = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    today.setDate(today.getDate() + days);
    let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format(today);
    return `${week[today.getUTCDay() - 1]} ${today.getDate()} de ${capitalize(mesActual)}`;
  }
  render() {
    var _a, _b, _c, _d, _e, _f;
    return (h(Host, null,
      h("div", { class: "confirmCreditInformation" },
        h("div", null,
          h("h2", { class: "title" }, "Confirma la informaci\u00F3n de tu cr\u00E9dito"),
          h("div", { class: "details" },
            h("div", { class: "item highlighted" },
              h("label", null, "Monto final solicitado:"),
              h("p", { class: "value" }, formatNumber((_b = (_a = state.currentCreditInfo) === null || _a === void 0 ? void 0 : _a.creditFirstCapital) !== null && _b !== void 0 ? _b : 0))),
            h("div", { class: "item" }, this.currencyValues.map(_currencyValue => {
              var _a;
              return (h("emprender-cs-item", { text: typeof _currencyValue.label === 'string' ? _currencyValue.label : '', subText: this.getFieldSubLabel(_currencyValue.subLabel), value: (_a = state.currentCreditInfo[`credit${capitalize(_currencyValue.key)}`]) !== null && _a !== void 0 ? _a : 0, space: _currencyValue.space }));
            }))),
          h("h5", null,
            "Total a pagar: ",
            formatNumber((_d = (_c = state.currentCreditInfo) === null || _c === void 0 ? void 0 : _c.creditFirstCapital) !== null && _d !== void 0 ? _d : 0)),
          h("h6", { class: "mb20" },
            "Fecha pr\u00F3ximo pago: ",
            this.getPayDay((_f = (_e = state.currentCreditInfo) === null || _e === void 0 ? void 0 : _e.creditTerm) !== null && _f !== void 0 ? _f : 0))))));
  }
  static get is() { return "emprender-credit-data"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-credit-data.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-credit-data.css"]
  }; }
  static get states() { return {
    "currencyValues": {}
  }; }
}
