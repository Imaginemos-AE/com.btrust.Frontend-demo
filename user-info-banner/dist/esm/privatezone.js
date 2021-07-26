import { p as promiseResolve, b as bootstrapLazy } from './index-b431909e.js';

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
  return bootstrapLazy([["emprender-pz-user-info",[[1,"emprender-pz-user-info",{"userInfo":[1040]}]]]], options);
});
