const keycloakConfig = {
  url: 'https://credito.muii.com.co/auth',
  realm: 'muii',
  clientId: 'muii-pz-user-info'
};
export class AuthKeycloakService {
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
