import { Component, Host, h, Prop, Event } from '@stencil/core';
import state, { loadDefaultData, sendFetch, setUserInformation } from '../../module/store';
import { loadCSS, loadScript } from '../../utils/utils';
const EMPLOYEE_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'financial-information', field: 'financialInformation' },
  { tag: 'references', field: 'references' },
];
const INDEPENDENT_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'company-information', field: 'companyInformation' },
  { tag: 'financial-company', field: 'financialCompany' },
  { tag: 'references', field: 'references' },
];
export class EmprenderUserForms {
  constructor() {
    this.flowType = 'employee';
    this.step = 0;
    this.loading = false;
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
    setTimeout(() => (this.loading = true), 800);
  }
  _renderCurrentStep() {
    if (this.step >= 0 && this.step < this._getFlow().length) {
      const { tag, field } = this._getFlow()[this.step];
      const _tag = `emprender-uf-${tag}`;
      return (h(_tag, { model: this._getData(field), flow: this.flowType, onInfoSaved: ev => this.saveInfo(field, ev.detail), onBack: ev => this.onBackPressed(field, ev.detail) }));
    }
  }
  _updateStep(direction) {
    this.loading = false;
    if (direction === 'up') {
      const max = this._getFlow().length - 1;
      this.step = this.step < max ? this.step + 1 : max;
    }
    else {
      this.step = this.step != 0 ? this.step - 1 : 0;
    }
  }
  saveInfo(field, data) {
    setUserInformation(field, data);
    this._updateStep('up');
    this.infoSaved.emit(state.currentUserInformation);
    if (field === 'references')
      sendFetch(this.flowType);
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
      h("div", { class: "prueba" }, this.loading ? this._renderCurrentStep() : this.getLoadingGif())));
  }
  static get is() { return "emprender-user-forms"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-forms.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-forms.css"]
  }; }
  static get properties() { return {
    "flowType": {
      "type": "string",
      "mutable": true,
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
      "reflect": true,
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
