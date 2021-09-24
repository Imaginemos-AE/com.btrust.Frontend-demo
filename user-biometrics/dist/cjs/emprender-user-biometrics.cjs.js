'use strict';

const index = require('./index-2e70a445.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('emprender-user-biometrics.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["emprender-ub-home_2.cjs",[[1,"emprender-ub-home"],[1,"emprender-ub-signature"]]],["emprender-user-biometrics.cjs",[[1,"emprender-user-biometrics",{"adoConfig":[1,"ado-config"],"type":[1]}]]],["emprender-ub-failure_3.cjs",[[1,"emprender-user-biometrics-result",{"state":[1],"type":[1]}],[1,"emprender-ub-failure",{"type":[1]}],[1,"emprender-ub-success",{"type":[1]}]]]], options);
});
