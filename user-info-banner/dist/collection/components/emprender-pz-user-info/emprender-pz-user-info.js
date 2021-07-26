import { h, Component, Prop, Host, Event } from "@stencil/core";
import { loadCSS, loadScript } from '../../utils/utils';
export class PrivateZoneInfo {
  constructor() {
    this.userInfo = {
      firstName: '',
      lastName: '',
      numCredit: 0
    };
  }
  async componentWillLoad() {
    await loadCSS("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap");
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
  }
  render() {
    return h(Host, null,
      h("section", { class: "clientInfo" },
        h("div", { class: "container" },
          h("div", { class: "row flex-center-center" },
            h("div", { class: "col-md-7" },
              h("h5", null, "Bienvenido (a)"),
              h("h3", { class: "name" },
                this.userInfo.firstName,
                " ",
                this.userInfo.lastName),
              h("p", null,
                "Cr\u00E9ditos activos: ",
                this.userInfo.numCredit,
                " ")),
            h("div", { class: "col-md-5" },
              h("ul", { class: "inline" },
                h("li", null,
                  h("a", { href: "#", onClick: () => this.changePass.emit() },
                    h("emprender-cl-icon", { icon: "change_pass", path: 4 }),
                    h("span", { class: "text" }, "Cambiar contrase\u00F1a"))),
                h("li", null,
                  h("a", { href: "#", onClick: () => this.logout.emit() },
                    h("emprender-cl-icon", { icon: "logout", path: 4 }),
                    h("span", { class: "text" }, "Cerrar Sesi\u00F3n")))))))));
  }
  static get is() { return "emprender-pz-user-info"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-pz-user-info.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-pz-user-info.css"]
  }; }
  static get properties() { return {
    "userInfo": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "PrivateInformation",
        "resolved": "PrivateInformation",
        "references": {
          "PrivateInformation": {
            "location": "import",
            "path": "../../module/models"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "{\r\n        firstName: '',\r\n        lastName: '',\r\n        numCredit: 0\r\n    }"
    }
  }; }
  static get events() { return [{
      "method": "logout",
      "name": "logout",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "changePass",
      "name": "changePass",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
