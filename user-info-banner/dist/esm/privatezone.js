import { p as promiseResolve, b as bootstrapLazy } from './index-678f9bd7.js';

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
  return bootstrapLazy([["emprender-email-information_2",[[1,"emprender-email-information"],[1,"emprender-pz-user-info"]]]], options);
});
