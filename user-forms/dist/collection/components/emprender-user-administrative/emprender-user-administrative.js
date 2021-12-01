import { Component, h, Host } from '@stencil/core';
import { loadCSS, loadScript } from '../../utils/utils';
// import { userAdminInformation } from '../../server/adminService';
export class EmprenderUfWorkingInformation {
  // @Prop({ mutable: true, reflect: true }) id: string = '';
  // @Prop({ mutable: true, reflect: true }) userInformation: any;
  async componentWillLoad() {
    await loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    // this.userInformation = userAdminInformation(this.id);
  }
  render() {
    return (h(Host, null,
      h("emprender-uf-personal-information-3", { adminZone: true }),
      h("emprender-uf-company-profile", { adminZone: true }),
      h("emprender-uf-references", { flow: 'independent', viewRegistration: false, adminZone: true }),
      h("emprender-user-bank", { adminZone: true })));
  }
  static get is() { return "emprender-user-administrative"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["emprender-user-administrative.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["emprender-user-administrative.css"]
  }; }
}
