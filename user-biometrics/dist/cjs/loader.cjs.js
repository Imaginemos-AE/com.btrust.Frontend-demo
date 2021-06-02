'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-14d23d7b.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-ub-home_2.cjs",[[1,"emprender-user-biometrics"],[1,"emprender-ub-home"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
