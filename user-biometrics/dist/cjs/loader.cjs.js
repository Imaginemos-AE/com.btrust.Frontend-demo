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
  return index.bootstrapLazy([["emprender-ub-failure_2.cjs",[[1,"emprender-ub-failure"],[1,"emprender-ub-success"]]],["emprender-user-biometrics-result.cjs",[[1,"emprender-user-biometrics-result",{"state":[1]}]]],["emprender-ub-home_2.cjs",[[1,"emprender-user-biometrics",{"adoConfig":[1,"ado-config"]}],[1,"emprender-ub-home"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
