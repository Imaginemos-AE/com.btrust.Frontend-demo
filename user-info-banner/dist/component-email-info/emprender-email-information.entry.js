import { r as registerInstance, h, e as Host } from './index-88eab999.js';

function formatNumber(num, signSpace = false) {
  return `$${signSpace ? ' ' : ''}${num === null || num === void 0 ? void 0 : num.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}`;
}
function loadScript(url, id, type) {
  return new Promise(resolve => {
    document.body.appendChild(Object.assign(document.createElement('script'), {
      type: type,
      async: true,
      defer: true,
      id: id,
      src: url,
      onload: resolve
    }));
  });
}
function loadCSS(url) {
  return new Promise(resolve => {
    const links = document.getElementsByTagName('link');
    const exist = Array.from(links).some(_link => _link.href === url);
    if (!exist) {
      const link = document.createElement('link');
      link.onload = resolve;
      link.href = url;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    else {
      resolve(true);
    }
  });
}

const keycloakConfig = {
  url: 'https://credito.muii.com.co/auth',
  realm: 'muii',
  clientId: 'muii-pz-user-info'
};
class AuthKeycloakService {
  constructor() {
    const _keycloakClass = window["Keycloak"];
    this.keycloakInstance = _keycloakClass(keycloakConfig);
  }
  async build() {
    return this.keycloakInstance.init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html'
    }).then((auth) => {
      if (!auth) {
        throw new Error("Not authenticated");
      }
      return this.keycloakInstance;
    });
  }
}

const emprenderEmailInformationCss = ".button{text-decoration:none;box-shadow:none !important;border:none;border-radius:50px;cursor:pointer;font-family:var(--secondary-font, \"Varela Round\", sans-serif);font-weight:600;display:inline-block;text-transform:none;text-align:center;max-width:100%}.button.block{display:block}.button.xsmall{height:20px;font-size:12px;padding:0 15px;line-height:20px}.button.xsmall i{display:inline-block;font-size:13px;position:relative;top:3px;margin-left:5px}.button.small{height:26px;font-size:13px;padding:0 15px;line-height:26px}.button.small i{display:inline-block;font-size:16px;position:relative;top:3px;margin-left:5px}.button.medium{height:40px;font-size:15px;padding:0 40px;line-height:40px;text-align:left;padding:0px 20px 0 25px}.button.medium emprender-cl-icon{display:inline-block;font-size:20px;position:relative;top:4px;margin-left:15px}.button.primary{background-color:var(--primary-color, #51215B);color:var(--secondary-color, #F8B23F) !important}.button.primary:hover{background-color:var(--secondary-color, #F8B23F);color:var(--secondary-color, #F8B23F) !important}.button.secondary{background-color:var(--secondary-color, #F8B23F);color:var(--primary-color, #51215B) !important}.button.secondary:hover{opacity:0.9}.button.tertiary{background-color:var(--tertiary-color, #4A4A4A);color:var(--secondary-color, #F8B23F) !important}.button.tertiary:hover{opacity:0.9}.button.disabled{opacity:0.8;pointer-events:none}";

const EmailInformation = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
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
    return (h(Host, null, h("a", { href: "#", class: "button medium secondary" }, this.userInfo, h("emprender-cl-icon", { icon: "profile", path: 0 }))));
  }
};
EmailInformation.style = emprenderEmailInformationCss;

export { EmailInformation as emprender_email_information };
