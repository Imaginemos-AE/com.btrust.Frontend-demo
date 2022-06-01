import { p as promiseResolve, b as bootstrapLazy } from './index-678f9bd7.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-email-information_2",[[1,"emprender-email-information"],[1,"emprender-pz-user-info"]]]], options);
  });
};

export { defineCustomElements };
