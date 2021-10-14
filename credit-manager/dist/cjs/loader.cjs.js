'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-20c4c25d.js');

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-ci-result_2.cjs",[[1,"emprender-ci-result",{"status":[1]}],[1,"emprender-credit-information",{"userDocumentId":[1,"user-document-id"]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
