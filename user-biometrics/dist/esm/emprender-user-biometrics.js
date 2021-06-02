import { p as promiseResolve, b as bootstrapLazy } from './index-24e838da.js';

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
  return bootstrapLazy([["emprender-ub-home_2",[[1,"emprender-user-biometrics"],[1,"emprender-ub-home"]]]], options);
});
