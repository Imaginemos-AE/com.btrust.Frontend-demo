import { Component, Host, h, Prop, Event } from '@stencil/core';
import state, { loadDefaultData, setUserInformation } from '../../module/store';
import { loadCSS, loadScript } from '../../utils/utils';
const EMPLOYEE_FLOW = [
  { tag: 'personal-information-3', field: 'personalInformation' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'references', field: 'references' },
];
const INDEPENDENT_FLOW = [
  { tag: 'personal-information-3', field: 'personalInformation' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'references', field: 'references' },
];
export class EmprenderUserForms {
  constructor() {
    this.flowType = 'employee';
    this.step = 0;
    this.loading = false;
    this.barState = 'bar0';
    this.alarmUpgrade = false;
    this._getFlow = () => (this.flowType === 'employee' ? EMPLOYEE_FLOW : INDEPENDENT_FLOW);
    this._getData = (field) => { var _a; return ((_a = state.currentUserInformation) !== null && _a !== void 0 ? _a : {})[field]; };
    this.getLoadingGif = () => h("div", { class: "lds-dual-ring" });
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    loadDefaultData();
  }
  isLoading() {
    setTimeout(() => (this.loading = true), 1000);
  }
  _renderCurrentStep() {
    if (this.step >= 0 && this.step < this._getFlow().length) {
      const { tag, field } = this._getFlow()[this.step];
      const _tag = `emprender-uf-${tag}`;
      return (h(_tag, { model: this._getData(field), model2: this._getData('personalInformation2'), model3: this._getData('bankInformation'), viewRegistration: false, flow: this.flowType, onInfoSaved: ev => this.saveInfo(field, ev.detail), onUpgradeInfo: ev => this.upgradeInfo(field, ev.detail), onBack: ev => this.onBackPressed(field, ev.detail) }));
    }
  }
  _updateStep(direction) {
    this.loading = false;
    this.alarmUpgrade = false;
    if (direction === 'up') {
      const max = this._getFlow().length - 1;
      this.step = this.step < max ? this.step + 1 : max;
    }
    else {
      this.step = this.step != 0 ? this.step - 1 : 0;
    }
    this.barState = `bar${this.step}`;
  }
  saveInfo(field, data) {
    setUserInformation(field, data);
    this._updateStep('up');
    this.infoSaved.emit(state.currentUserInformation);
  }
  upgradeInfo(field, data) {
    this.alarmUpgrade = true;
    if (Array.isArray(data)) {
      setUserInformation('personalInformation', data[0]);
      setUserInformation('personalInformation2', data[1]);
      setUserInformation('bankInformation', data[2]);
      if (data[3] === 'up') {
        this.alarmUpgrade = false;
        this._updateStep('up');
        this.infoSaved.emit(state.currentUserInformation);
      }
    }
    else {
      setUserInformation(field, data);
    }
  }
  onBackPressed(field, data) {
    setUserInformation(field, data);
    this._updateStep('down');
    this.backSaved.emit(state.currentUserInformation);
  }
  componentWillRender() {
    this.isLoading();
  }
  render() {
    return (h(Host, null,
      h("div", { class: "multiStep" },
        h("ul", { class: "info" },
          h("li", null,
            h("span", { class: "number bgPrimary" }, "1"),
            h("span", { class: "text" }, "Informaci\u00F3n Personal")),
          h("li", null,
            h("span", { class: "number bgTertiary" }, "2"),
            h("span", { class: "text" }, "Informaci\u00F3n Laboral")),
          h("li", null,
            h("span", { class: "number bgQuaternary" }, "3"),
            h("span", { class: "text" }, "Referencias"))),
        h("div", { class: "progress" },
          h("div", { class: `progress-bar ${this.barState}`, role: "progressbar", "aria-valuenow": "25", "aria-valuemin": "0", "aria-valuemax": "4" }))),
      h("div", { class: "prueba" },
        this.alarmUpgrade ? (h("div", { class: "alert simple-alert", role: "alert" },
          h("h3", null, "Actualizado"),
          h("a", { class: "close", onClick: () => this.alarmUpgrade = false }, "\u00D7"))) : (''),
        this.loading ? this._renderCurrentStep() : this.getLoadingGif())));
  }
  static get is() { return "emprender-user-profile"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-profile.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-profile.css"]
  }; }
  static get properties() { return {
    "flowType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'employee' | 'independent'",
        "resolved": "\"employee\" | \"independent\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "flow-type",
      "reflect": false,
      "defaultValue": "'employee'"
    },
    "step": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "step",
      "reflect": true,
      "defaultValue": "0"
    },
    "loading": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    },
    "barState": {
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
      "attribute": "bar-state",
      "reflect": true,
      "defaultValue": "'bar0'"
    },
    "alarmUpgrade": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "alarm-upgrade",
      "reflect": true,
      "defaultValue": "false"
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
        "original": "UserForm",
        "resolved": "UserForm",
        "references": {
          "UserForm": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }, {
      "method": "backSaved",
      "name": "backSaved",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "UserForm",
        "resolved": "UserForm",
        "references": {
          "UserForm": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      }
    }]; }
}
