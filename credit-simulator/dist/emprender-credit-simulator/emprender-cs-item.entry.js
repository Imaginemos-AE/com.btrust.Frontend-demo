import { r as registerInstance, h, e as Host } from './index-d5c71035.js';
import { f as formatNumber } from './utils-06099684.js';

const emprenderCsItemCss = ".item{padding-bottom:5px}.item:after{content:\" \";display:block;height:0;clear:both;visibility:hidden}.item label{display:block;float:left;font-weight:600;font-size:14px;margin-bottom:0;width:70%;text-align:left;line-height:16px}.item label span{display:inline-block;font-size:10px;padding-left:2px}.item p{display:block;float:right;font-weight:600;width:30%;text-align:right;line-height:16px;margin-bottom:0;margin-top:0}.item p .tooltipWhite{color:#8c8c8c;font-size:12px;padding-left:5px;position:relative;top:1px}";

const EmprenderCsItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("div", { class: "item" }, h("label", null, this.text, this.space && " ", this.subText && h("span", null, "(", this.subText, ")")), h("p", { class: "value" }, formatNumber(this.value, true), h("slot", null)))));
  }
};
EmprenderCsItem.style = emprenderCsItemCss;

export { EmprenderCsItem as emprender_cs_item };
