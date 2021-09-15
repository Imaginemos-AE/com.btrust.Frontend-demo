import { p as promiseResolve, b as bootstrapLazy } from './index-41cc96ef.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-cl-button_4",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513],"buttonStyle":[520,"button-style"]}],[1,"emprender-cl-icon",{"icon":[513],"path":[514]}],[1,"emprender-cl-input",{"label":[1],"inputOptions":[8,"input-options"],"requiredIndicator":[4,"required-indicator"],"maskOptions":[8,"mask-options"],"maskValue":[1,"mask-value"],"value":[1537],"checkData":[1540,"check-data"],"typeAddress":[1540,"type-address"]}],[1,"emprender-cl-select",{"label":[1],"options":[16],"value":[1537],"selectInputOptions":[8,"select-input-options"],"requiredIndicator":[4,"required-indicator"],"checkData":[1540,"check-data"]}]]]], options);
  });
};

export { defineCustomElements };
