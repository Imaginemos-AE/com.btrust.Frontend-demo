'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fff3a53f.js');
const store = require('./store-6b137416.js');
const utils = require('./utils-2fe1da8e.js');
require('./helper-b3bc1886.js');

const emprenderUserFormsCss = ":host{display:block}.prueba{min-height:50VH;position:relative}.lds-dual-ring{display:inline-block;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);width:80px;height:80px}.lds-dual-ring:after{content:\" \";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #51215b;border-color:#51215b transparent #51215b transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";

const EMPLOYEE_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'working-information', field: 'workingInformation' },
  { tag: 'financial-information', field: 'financialInformation' },
  { tag: 'references', field: 'references' },
];
const INDEPENDENT_FLOW = [
  { tag: 'personal-information', field: 'personalInformation' },
  { tag: 'personal-information-2', field: 'personalInformation2' },
  { tag: 'company-information', field: 'companyInformation' },
  { tag: 'financial-company', field: 'financialCompany' },
  { tag: 'references', field: 'references' },
];
const EmprenderUserForms = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.infoSaved = index.createEvent(this, "infoSaved", 7);
    this.backSaved = index.createEvent(this, "backSaved", 7);
    this.flowType = 'employee';
    this.step = 0;
    this.loading = false;
    this._getFlow = () => (this.flowType === 'employee' ? EMPLOYEE_FLOW : INDEPENDENT_FLOW);
    this._getData = (field) => { var _a; return ((_a = store.state.currentUserInformation) !== null && _a !== void 0 ? _a : {})[field]; };
    this.getLoadingGif = () => index.h("div", { class: "lds-dual-ring" });
  }
  async componentWillLoad() {
    await utils.loadCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500&family=Varela+Round&display=swap');
    await utils.loadScript('https://imaginemos-ae.github.io/com.emprender.FrontEnd-demo/components-library/dist/emprender-components-library/emprender-components-library.esm.js', 'emprender-components-library', 'module');
    store.loadDefaultData();
  }
  isLoading() {
    setTimeout(() => (this.loading = true), 800);
  }
  _renderCurrentStep() {
    if (this.step >= 0 && this.step < this._getFlow().length) {
      const { tag, field } = this._getFlow()[this.step];
      const _tag = `emprender-uf-${tag}`;
      return (index.h(_tag, { model: this._getData(field), flow: this.flowType, onInfoSaved: ev => this.saveInfo(field, ev.detail), onBack: ev => this.onBackPressed(field, ev.detail) }));
    }
  }
  _updateStep(direction) {
    this.loading = false;
    if (direction === 'up') {
      const max = this._getFlow().length - 1;
      this.step = this.step < max ? this.step + 1 : max;
    }
    else {
      this.step = this.step != 0 ? this.step - 1 : 0;
    }
  }
  saveInfo(field, data) {
    store.setUserInformation(field, data);
    this._updateStep('up');
    this.infoSaved.emit(store.state.currentUserInformation);
    if (field === 'references')
      store.sendFetch(this.flowType);
  }
  onBackPressed(field, data) {
    store.setUserInformation(field, data);
    this._updateStep('down');
    this.backSaved.emit(store.state.currentUserInformation);
  }
  componentWillRender() {
    this.isLoading();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "prueba" }, this.loading ? this._renderCurrentStep() : this.getLoadingGif())));
  }
};
EmprenderUserForms.style = emprenderUserFormsCss;

exports.emprender_user_forms = EmprenderUserForms;
