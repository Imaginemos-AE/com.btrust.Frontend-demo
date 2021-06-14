'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a421310.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-cl-button_4.cjs",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513]}],[1,"emprender-cl-icon",{"icon":[513]}],[1,"emprender-cl-input",{"label":[1],"inputOptions":[8,"input-options"],"requiredIndicator":[4,"required-indicator"],"value":[1537]}],[1,"emprender-cl-select",{"label":[1],"options":[16],"value":[1537],"selectInputOptions":[8,"select-input-options"],"requiredIndicator":[4,"required-indicator"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
