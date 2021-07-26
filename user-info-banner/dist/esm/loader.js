import { p as promiseResolve, b as bootstrapLazy } from './index-b431909e.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-pz-user-info",[[1,"emprender-pz-user-info",{"userInfo":[1040]}]]]], options);
  });
};

export { defineCustomElements };
