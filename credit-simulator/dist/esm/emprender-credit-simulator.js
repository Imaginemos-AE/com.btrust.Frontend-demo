import { p as promiseResolve, b as bootstrapLazy } from './index-d81044b2.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["emprender-credit-data_5",[[1,"emprender-credit-simulator",{"sliderValues":[32],"currencyValues":[32],"termSliderOrder":[32]}],[1,"emprender-credit-data",{"currencyValues":[32]}],[1,"emprender-mini-calculator",{"showButtons":[32],"displayElement":[32]}],[1,"emprender-cs-slider",{"value":[1538],"label":[1],"min":[1538],"minLabel":[1537,"min-label"],"max":[1538],"maxLabel":[1537,"max-label"],"step":[1538],"formatter":[16],"updateBoundaries":[64]}],[1,"emprender-cs-item",{"text":[1],"subText":[1,"sub-text"],"value":[2],"space":[4]}]]]], options);
});
