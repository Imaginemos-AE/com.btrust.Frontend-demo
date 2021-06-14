import { p as promiseResolve, b as bootstrapLazy } from './index-a29c86b7.js';

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
  return bootstrapLazy([["emprender-uf-personal-information",[[1,"emprender-uf-personal-information",{"model":[32],"departments":[32]}]]],["emprender-uf-personal-information-2",[[1,"emprender-uf-personal-information-2",{"model":[32],"departments":[32]}]]]], options);
});
