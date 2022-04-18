import { r as registerInstance, f as createEvent, h, e as Host, g as getElement } from './index-8e91f2a7.js';

const emprenderClSelectCss = "select:-webkit-autofill,select:-webkit-autofill:hover,select:-webkit-autofill:focus{border:none;-webkit-text-fill-color:#3c516c;-webkit-box-shadow:0 0 0px 1000px #f4faff inset;transition:background-color 5000s ease-in-out 0s;outline:none !important}select.form-control{background-color:#eeeeee;border:1px solid #eaeaea;border-radius:7px;font-size:14px;height:36px;line-height:37px;padding:0px 10px;text-align-last:center;width:100%}select.form-control:focus{box-shadow:0 0 10px rgba(25, 148, 255, 0.3) inset;border:1px solid rgba(25, 148, 255, 0.5)}select.form-control{-webkit-appearance:none;-moz-appearance:none;background-image:url(\"data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 20 20' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\");background-repeat:no-repeat;background-position-x:97%;background-position-y:8px}label{color:var(--primary-color, #51215b);font-family:var(--secondary-font, \"Varela Round\", sans-serif);display:block;font-size:14px;line-height:16px;text-align:center;padding:0px 10px;margin-bottom:5px}label span.req{color:#e13d4c;display:inline-block;padding-left:5px}.checkData_label{color:#e13d4c}select.checkData_select{border-color:#e13d4c}";

const EmprenderClSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selectChange = createEvent(this, "selectChange", 7);
  }
  onSelectChange() {
    this.value = this.selectInput.value;
    this.selectChange.emit(this.value);
    if (this.value !== "" || this.value !== undefined) {
      this.checkData = false;
    }
  }
  renderOptions() {
    var _a;
    return ((_a = this.options) !== null && _a !== void 0 ? _a : []).map(option => h("option", { value: option.id, selected: option.id === this.value }, option.name));
  }
  renderSlot() {
    var _a;
    if (!this.options) {
      return Array.from((_a = this.host.querySelectorAll('option')) !== null && _a !== void 0 ? _a : []).map(option => h("option", { value: option.value, selected: option.value === this.value }, option.text));
    }
  }
  render() {
    var _a;
    return (h(Host, null, this.label && h("label", { class: this.checkData ? "checkData_label" : '', htmlFor: (_a = this.selectInputOptions) === null || _a === void 0 ? void 0 : _a.id }, this.label, this.requiredIndicator && h("span", { class: "req" }, "*")), h("select", Object.assign({ class: this.checkData ? "form-control checkData_select" : 'form-control', ref: (el) => this.selectInput = el, onChange: () => this.onSelectChange() }, this.selectInputOptions), h("option", { value: "", selected: !this.value, disabled: true, hidden: true }, "Selecciona"), this.renderOptions(), this.renderSlot())));
  }
  get host() { return getElement(this); }
};
EmprenderClSelect.style = emprenderClSelectCss;

export { EmprenderClSelect as emprender_cl_select };
