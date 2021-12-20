import { Component, h, Host, Prop } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
import { getUserModelsInformation } from '../../server/adminService';
export class EmprenderUfWorkingInformation {
  constructor() {
    this.documentId = '';
    this.flowType = 'employee';
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    this.userInformation = await getUserModelsInformation(this.documentId);
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return (h(Host, null,
      h("emprender-uf-personal-information-3", { model: (_a = this.userInformation) === null || _a === void 0 ? void 0 : _a.personalInformation, model2: (_b = this.userInformation) === null || _b === void 0 ? void 0 : _b.personalInformation2, model3: (_c = this.userInformation) === null || _c === void 0 ? void 0 : _c.bankInformation, adminZone: true }),
      (((_d = this.userInformation) === null || _d === void 0 ? void 0 : _d.flow) === 'employee') || h("emprender-uf-company-profile", { model: (_e = this.userInformation) === null || _e === void 0 ? void 0 : _e.companyInformation, adminZone: true }),
      (((_f = this.userInformation) === null || _f === void 0 ? void 0 : _f.flow) === 'independent') ? h("emprender-uf-financial-company", { adminZone: true, model: (_g = this.userInformation) === null || _g === void 0 ? void 0 : _g.financialCompanyInformation }) : h("emprender-uf-financial-information", { adminZone: true, model: (_h = this.userInformation) === null || _h === void 0 ? void 0 : _h.financialInformation }),
      h("emprender-uf-references", { model: (_j = this.userInformation) === null || _j === void 0 ? void 0 : _j.references, flow: (_k = this.userInformation) === null || _k === void 0 ? void 0 : _k.flow, viewRegistration: false, adminZone: true })));
  }
  static get is() { return "emprender-user-administrative"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-administrative.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-administrative.css"]
  }; }
  static get properties() { return {
    "documentId": {
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
      "attribute": "document-id",
      "reflect": true,
      "defaultValue": "''"
    },
    "userInformation": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "user-information",
      "reflect": true
    },
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
    }
  }; }
}
