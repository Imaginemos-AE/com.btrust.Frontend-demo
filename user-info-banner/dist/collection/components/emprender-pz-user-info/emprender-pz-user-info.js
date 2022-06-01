import { h, Component, Host, Event } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
import { AuthKeycloakService } from '../../Module/services';
export class PrivateZoneInfo {
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    if (!this.userInfo) {
      this.userCalculated = true;
      await loadScript(`https://credito.muii.com.co/auth/js/keycloak.js`, 'keycloak', 'text/javascript');
      this.authService = new AuthKeycloakService();
      this.kcInstance = await this.authService.build();
      const userProfile = await this.kcInstance.loadUserProfile();
      this.userInfo = {
        firstName: userProfile === null || userProfile === void 0 ? void 0 : userProfile.firstName,
        lastName: userProfile === null || userProfile === void 0 ? void 0 : userProfile.lastName,
        numCredit: 0,
      };
    }
  }
  clickLogout() {
    if (this.userCalculated) {
      this.kcInstance.logout({ redirectUri: 'https://credito.muii.com.co/home/' });
    }
    else {
      this.logout.emit();
    }
  }
  clickSetPassword() {
    if (this.userCalculated) {
      const url = `${this.kcInstance.authServerUrl}/realms/muii/account/password?referrer=${this.kcInstance.clientId}&referrer_uri=${window.location}`;
      window.location.assign(url);
    }
    else {
      this.changePass.emit();
    }
  }
  render() {
    var _a, _b, _c;
    return (h(Host, null,
      h("section", { class: "clientInfo" },
        h("div", { class: "container" },
          h("div", { class: "row flex-center-center" },
            h("div", { class: "col-md-7" },
              h("h5", null, "Bienvenido (a)"),
              h("h3", { class: "name" }, (_a = this.userInfo) === null || _a === void 0 ? void 0 :
                _a.firstName,
                " ", (_b = this.userInfo) === null || _b === void 0 ? void 0 :
                _b.lastName),
              h("p", null,
                "Cr\u00E9ditos activos: ", (_c = this.userInfo) === null || _c === void 0 ? void 0 :
                _c.numCredit,
                " ")),
            h("div", { class: "col-md-5" },
              h("ul", { class: "inline" },
                h("li", null,
                  h("a", { class: "link", onClick: () => this.clickSetPassword() },
                    h("emprender-cl-icon", { icon: "change_pass", path: 4 }),
                    h("span", { class: "text" }, "Cambiar contrase\u00F1a"))),
                h("li", null,
                  h("a", { class: "link", onClick: () => this.clickLogout() },
                    h("emprender-cl-icon", { icon: "logout", path: 4 }),
                    h("span", { class: "text" }, "Cerrar Sesi\u00F3n"))))))))));
  }
  static get is() { return "emprender-pz-user-info"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-pz-user-info.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-pz-user-info.css"]
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
