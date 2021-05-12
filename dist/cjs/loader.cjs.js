'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1903bbd7.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-credit-simulator_3.cjs",[[1,"emprender-credit-simulator",{"sliderValues":[32],"currencyValues":[32]}],[1,"emprender-cs-item",{"text":[1],"subText":[1,"sub-text"],"value":[2],"space":[4]}],[1,"emprender-cs-slider",{"value":[1538],"label":[1],"min":[2],"minLabel":[1,"min-label"],"max":[2],"maxLabel":[1,"max-label"],"step":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
