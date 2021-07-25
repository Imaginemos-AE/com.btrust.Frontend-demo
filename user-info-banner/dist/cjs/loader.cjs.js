'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f98a03d3.js');

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-private-zone.cjs",[[1,"emprender-private-zone",{"userInfo":[1040]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
