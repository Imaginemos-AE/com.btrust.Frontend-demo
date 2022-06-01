import { h, Component, Host } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
import { AuthKeycloakService } from '../../Module/services';
export class EmailInformation {
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    if (!this.userInfo) {
      this.userCalculated = true;
      await loadScript(`https://credito.muii.com.co/auth/js/keycloak.js`, 'keycloak', 'text/javascript');
      this.authService = new AuthKeycloakService();
      this.kcInstance = await this.authService.build();
      const userProfile = await this.kcInstance.loadUserProfile();
      this.userInfo = userProfile === null || userProfile === void 0 ? void 0 : userProfile.email;
    }
  }
  render() {
    return (h(Host, null,
      h("a", { href: "#", class: "button medium secondary" },
        this.userInfo,
        h("emprender-cl-icon", { icon: "profile", path: 0 }))));
  }
  static get is() { return "emprender-email-information"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-email-information.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-email-information.css"]
  }; }
}
