import { p as promiseResolve, b as bootstrapLazy } from './index-d8f604d0.js';

/*
 Stencil Client Patch Esm v2.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-ci-result_2",[[1,"emprender-ci-result",{"status":[1]}],[1,"emprender-credit-information",{"userDocumentId":[1,"user-document-id"]}]]]], options);
  });
};

export { defineCustomElements };
