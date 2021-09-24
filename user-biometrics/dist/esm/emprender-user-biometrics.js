import { p as promiseResolve, b as bootstrapLazy } from './index-6b51ac5c.js';

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
  return bootstrapLazy([["emprender-ub-home_2",[[1,"emprender-ub-home"],[1,"emprender-ub-signature"]]],["emprender-user-biometrics",[[1,"emprender-user-biometrics",{"adoConfig":[1,"ado-config"],"type":[1]}]]],["emprender-ub-failure_3",[[1,"emprender-user-biometrics-result",{"state":[1],"type":[1]}],[1,"emprender-ub-failure",{"type":[1]}],[1,"emprender-ub-success",{"type":[1]}]]]], options);
});
