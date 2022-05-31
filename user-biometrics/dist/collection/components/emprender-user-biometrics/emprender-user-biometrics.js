import { Component, Prop, Host, h } from '@stencil/core';
import state from '../../store/user-biometrics.store';
import { loadCSS, loadScript } from '../../utils/utils';
export class EmprenderUserBiometrics {
  constructor() {
    this.type = 'validate';
  }
  async componentWillLoad() {
    state.adoCofiguration = JSON.parse(this.adoConfig);
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.btrust.Frontend-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  render() {
    return (h(Host, null, this.type === 'validate' ? h("emprender-ub-home", null) : h("emprender-ub-signature", null)));
  }
  static get is() { return "emprender-user-biometrics"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-biometrics.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-biometrics.css"]
  }; }
  static get properties() { return {
    "adoConfig": {
      "type": "string",
      "mutable": false,
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
      "attribute": "ado-config",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'validate' | 'check'",
        "resolved": "\"check\" | \"validate\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'validate'"
    }
  }; }
}
