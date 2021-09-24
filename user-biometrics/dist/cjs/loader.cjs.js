'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2e70a445.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-ub-home_2.cjs",[[1,"emprender-ub-home"],[1,"emprender-ub-signature"]]],["emprender-user-biometrics.cjs",[[1,"emprender-user-biometrics",{"adoConfig":[1,"ado-config"],"type":[1]}]]],["emprender-ub-failure_3.cjs",[[1,"emprender-user-biometrics-result",{"state":[1],"type":[1]}],[1,"emprender-ub-failure",{"type":[1]}],[1,"emprender-ub-success",{"type":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
