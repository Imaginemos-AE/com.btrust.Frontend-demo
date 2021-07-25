import { p as promiseResolve, b as bootstrapLazy } from './index-fb4d6612.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-private-zone",[[1,"emprender-private-zone",{"userInfo":[1040]}]]]], options);
  });
};

export { defineCustomElements };
