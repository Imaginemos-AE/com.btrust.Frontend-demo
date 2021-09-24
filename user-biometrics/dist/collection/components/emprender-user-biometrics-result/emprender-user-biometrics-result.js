import { Component, Host, h, Event, Prop } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
export class EmprenderUserBiometricsResult {
  constructor() {
    this.state = 'initial';
    this.type = 'validate';
  }
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  renderLoading() {
    return (h("div", null,
      h("h5", null, "Cargando...")));
  }
  renderStatus() {
    if (['initial', 'loading'].includes(this.state))
      return this.renderLoading();
    switch (this.state) {
      case 'initial':
      case 'loading':
        return this.renderLoading();
      case 'success':
        return h("emprender-ub-success", { type: this.type, onContinue: () => this.continue.emit('success') });
      case 'failure':
        return h("emprender-ub-failure", { type: this.type, onContinue: () => this.continue.emit('failure') });
    }
  }
  render() {
    return (h(Host, null, this.renderStatus()));
  }
  static get is() { return "emprender-user-biometrics-result"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-biometrics-result.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-biometrics-result.css"]
  }; }
  static get properties() { return {
    "state": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'initial' | 'loading' | 'failure' | 'success'",
        "resolved": "\"failure\" | \"initial\" | \"loading\" | \"success\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "state",
      "reflect": false,
      "defaultValue": "'initial'"
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
  static get events() { return [{
      "method": "continue",
      "name": "continue",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
}
