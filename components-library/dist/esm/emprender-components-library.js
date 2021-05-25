import { p as promiseResolve, b as bootstrapLazy } from './index-f9c46067.js';

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
  return bootstrapLazy([["emprender-cl-button_2",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513]}],[1,"emprender-cl-icon",{"icon":[513]}]]]], options);
});
