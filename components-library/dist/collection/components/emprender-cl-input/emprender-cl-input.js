import { Component, Host, h, Prop, Event, Watch, Element } from '@stencil/core';
import IMask from 'imask';
import { expresiones } from '../../utils/validation';
import { loadScript } from '../../utils/utils';
export class EmprenderClInput {
  constructor() {
    this.maskValue = 'unmasked';
    this.checkData = false;
    this.typeAddress = false;
    this.dataType = '';
    this.place = "";
  }
  changeMaskValue() {
    if (this.inputMask) {
      if (this.maskValue === 'unmasked') {
        this.inputMask.unmaskedValue = this.value;
      }
      else {
        this.inputMask.value = this.value;
      }
    }
  }
  async componentDidLoad() {
    var _a;
    this.textInput.value = (_a = this.value) !== null && _a !== void 0 ? _a : '';
    if (this.maskOptions) {
      this.inputMask = IMask(this.textInput, this.maskOptions);
      this.inputMask.on('accept', _ev => {
        this.setValue(this.getMaskCalculatedValue());
      });
    }
    if (this.typeAddress) {
      await loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCYBy_5xXw_-nNeiMBfDqgfbXhuxB-mTQc&libraries=places', 'googleapi', 'text/javascript');
      var options = {
        types: ['geocode'],
      };
      let prueba = this.host.shadowRoot.querySelector('.text');
      let autocomplete = new google.maps.places.Autocomplete(prueba, options);
      autocomplete.addListener('place_changed', function () {
        this.inputChange.emit(autocomplete.getPlace()['formatted_address']);
      });
    }
  }
  onInputChange(ev) {
    if (!this.inputMask) {
      this.setValue(this.textInput.value);
    }
    if (this.dataType !== '') {
      this.checkData = !expresiones[this.dataType].test(ev.target.value);
    }
  }
  getMaskCalculatedValue() {
    return this.inputMask ? (this.maskValue === 'unmasked' ? this.inputMask.unmaskedValue : this.inputMask.value) : null;
  }
  setValue(newValue) {
    this.value = newValue;
    this.inputChange.emit(this.value);
  }
  render() {
    var _a;
    return (h(Host, null,
      this.label && (h("label", { class: this.checkData ? 'checkData_label' : '', htmlFor: (_a = this.inputOptions) === null || _a === void 0 ? void 0 : _a.id },
        this.label,
        this.requiredIndicator && h("span", { class: "req" }, "*"))),
      h("input", Object.assign({ class: this.checkData ? 'text checkData_input' : 'text', type: "text", ref: el => (this.textInput = el) }, this.inputOptions, { onInput: ev => this.onInputChange(ev) })),
      h("li", null, this.place)));
  }
  static get is() { return "emprender-cl-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-cl-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-cl-input.css"]
  }; }
  static get properties() { return {
    "label": {
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
      "attribute": "label",
      "reflect": false
    },
    "inputOptions": {
      "type": "any",
      "mutable": false,
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
      "attribute": "input-options",
      "reflect": false
    },
    "requiredIndicator": {
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
      "attribute": "required-indicator",
      "reflect": true
    },
    "maskOptions": {
      "type": "any",
      "mutable": false,
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
      "attribute": "mask-options",
      "reflect": false
    },
    "maskValue": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'masked' | 'unmasked'",
        "resolved": "\"masked\" | \"unmasked\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mask-value",
      "reflect": false,
      "defaultValue": "'unmasked'"
    },
    "value": {
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
      "attribute": "value",
      "reflect": true
    },
    "checkData": {
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
      "attribute": "check-data",
      "reflect": true,
      "defaultValue": "false"
    },
    "typeAddress": {
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
      "attribute": "type-address",
      "reflect": true,
      "defaultValue": "false"
    },
    "dataType": {
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
      "attribute": "data-type",
      "reflect": true,
      "defaultValue": "''"
    },
    "place": {
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
      "attribute": "place",
      "reflect": true,
      "defaultValue": "\"\""
    }
  }; }
  static get events() { return [{
      "method": "inputChange",
      "name": "inputChange",
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
  static get elementRef() { return "host"; }
  static get watchers() { return [{
      "propName": "value",
      "methodName": "changeMaskValue"
    }]; }
}
