import { p as promiseResolve, b as bootstrapLazy } from './index-a873915c.js';

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["emprender-uf-personal-information",[[1,"emprender-uf-personal-information",{"model":[32]}]]]], options);
});
