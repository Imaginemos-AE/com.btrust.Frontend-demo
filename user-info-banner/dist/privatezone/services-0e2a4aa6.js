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

export { AuthKeycloakService as A, loadScript as a, loadCSS as l };
