import { p as promiseResolve, b as bootstrapLazy } from './index-d81044b2.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-credit-simulator_3",[[1,"emprender-credit-simulator",{"sliderValues":[32],"currencyValues":[32]}],[1,"emprender-cs-item",{"text":[1],"subText":[1,"sub-text"],"value":[2],"space":[4]}],[1,"emprender-cs-slider",{"value":[1538],"label":[1],"min":[1538],"minLabel":[1537,"min-label"],"max":[1538],"maxLabel":[1537,"max-label"],"step":[2],"formatter":[16],"updateBoundaries":[64]}]]]], options);
  });
};

export { defineCustomElements };
