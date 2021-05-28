'use strict';

const index = require('./index-2092dd48.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('emprender-credit-simulator.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["emprender-credit-simulator_3.cjs",[[1,"emprender-credit-simulator",{"sliderValues":[32],"currencyValues":[32],"termSliderOrder":[32]}],[1,"emprender-cs-item",{"text":[1],"subText":[1,"sub-text"],"value":[2],"space":[4]}],[1,"emprender-cs-slider",{"value":[1538],"label":[1],"min":[1538],"minLabel":[1537,"min-label"],"max":[1538],"maxLabel":[1537,"max-label"],"step":[1538],"formatter":[16],"updateBoundaries":[64]}]]]], options);
});
