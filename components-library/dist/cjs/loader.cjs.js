'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6ec04377.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-cl-button_2.cjs",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513]}],[1,"emprender-cl-icon",{"icon":[513]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
