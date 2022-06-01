'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-20b94e02.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-email-information_2.cjs",[[1,"emprender-email-information"],[1,"emprender-pz-user-info"]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
