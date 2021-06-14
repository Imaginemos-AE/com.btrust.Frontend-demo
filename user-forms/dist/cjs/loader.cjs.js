'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-82c0d550.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-uf-personal-information.cjs",[[1,"emprender-uf-personal-information",{"model":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
