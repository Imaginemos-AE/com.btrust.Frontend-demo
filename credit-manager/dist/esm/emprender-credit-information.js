import { p as promiseResolve, b as bootstrapLazy } from './index-d8f604d0.js';

/*
 Stencil Client Patch Browser v2.9.0 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["emprender-ci-result_2",[[1,"emprender-ci-result",{"status":[1]}],[1,"emprender-credit-information",{"userDocumentId":[1,"user-document-id"]}]]]], options);
});
