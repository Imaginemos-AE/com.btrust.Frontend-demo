'use strict';

const index = require('./index-203dfa5e.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('emprender-user-forms.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["emprender-uf-financial-information.cjs",[[1,"emprender-uf-financial-information",{"model":[1040]}]]],["emprender-uf-personal-information.cjs",[[1,"emprender-uf-personal-information",{"model":[1040],"departments":[32]}]]],["emprender-uf-personal-information-2.cjs",[[1,"emprender-uf-personal-information-2",{"model":[32],"departments":[32]}]]],["emprender-uf-references.cjs",[[1,"emprender-uf-references",{"model":[1040]}]]],["emprender-uf-working-information.cjs",[[1,"emprender-uf-working-information",{"model":[32]}]]],["emprender-user-forms.cjs",[[1,"emprender-user-forms",{"flowType":[1,"flow-type"],"step":[1538]}]]]], options);
});
