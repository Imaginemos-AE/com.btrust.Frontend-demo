import { Component, Host, h, Prop, Event } from '@stencil/core';
import state, { loadDefaultData, setUserInformation } from '../../module/store';
import { loadCSS, loadScript } from '../../utils/utils';
const EMPLOYEE_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'financial-information', field: 'financialInformation' },
  { tag: 'references', field: 'references' }
];
const INDEPENDENT_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'financial-information', field: 'financialInformation' },
  { tag: 'references', field: 'references' }
];
export class EmprenderUserForms {
  constructor() {
    this.flowType = 'employee';
    this.step = 0;
    this._getFlow = () => this.flowType === 'employee' ? EMPLOYEE_FLOW : INDEPENDENT_FLOW;
    this._getData = (field) => { var _a; return ((_a = state.currentUserInformation) !== null && _a !== void 0 ? _a : {})[field]; };
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    loadDefaultData();
  }
  _renderCurrentStep() {
    if (this.step >= 0 && this.step < this._getFlow().length) {
      const { tag, field } = this._getFlow()[this.step];
      const _tag = `emprender-uf-${tag}`;
      return h(_tag, { model: this._getData(field), onInfoSaved: (ev) => this.saveInfo(field, ev.detail) });
    }
  }
  saveInfo(field, data) {
    setUserInformation(field, data);
    this.step = this.step + 1;
    this.infoSaved.emit(state.currentUserInformation);
  }
  render() {
    return (h(Host, null, this._renderCurrentStep()));
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
    }]; }
}
