'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2092dd48.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["emprender-credit-data_5.cjs",[[1,"emprender-credit-simulator",{"sliderValues":[32],"currencyValues":[32],"termSliderOrder":[32]}],[1,"emprender-credit-data",{"currentCreditInfo":[1,"current-credit-info"],"currencyValues":[32]}],[1,"emprender-mini-calculator",{"showButtons":[32],"displayElement":[32]}],[1,"emprender-cs-slider",{"value":[1538],"label":[1],"min":[1538],"minLabel":[1537,"min-label"],"max":[1538],"maxLabel":[1537,"max-label"],"step":[1538],"infoLabel":[1540,"info-label"],"formatter":[16],"updateBoundaries":[64]}],[1,"emprender-cs-item",{"text":[1],"subText":[1,"sub-text"],"value":[2],"space":[4]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
