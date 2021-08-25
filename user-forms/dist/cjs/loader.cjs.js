'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4f687c28.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-uf-financial-information.cjs",[[1,"emprender-uf-financial-information",{"model":[1040]}]]],["emprender-uf-personal-information.cjs",[[1,"emprender-uf-personal-information",{"model":[1040],"departments":[32]}]]],["emprender-uf-personal-information-2.cjs",[[1,"emprender-uf-personal-information-2",{"model":[16],"departments":[32]}]]],["emprender-uf-personal-information-3.cjs",[[1,"emprender-uf-personal-information-3",{"model":[1040],"model2":[1040],"model3":[1040],"departments":[32]}]]],["emprender-uf-references.cjs",[[1,"emprender-uf-references",{"model":[1040],"viewRegistration":[4,"view-registration"]}]]],["emprender-uf-working-information.cjs",[[1,"emprender-uf-working-information",{"model":[16],"viewRegistration":[4,"view-registration"]}]]],["emprender-user-forms.cjs",[[1,"emprender-user-forms",{"flowType":[1,"flow-type"],"step":[1538],"loading":[1540]}]]],["emprender-user-profile.cjs",[[1,"emprender-user-profile",{"flowType":[1,"flow-type"],"step":[1538],"loading":[1540],"barState":[1537,"bar-state"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
