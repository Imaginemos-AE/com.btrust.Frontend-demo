import { p as promiseResolve, b as bootstrapLazy } from './index-24e838da.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-ub-home_2",[[1,"emprender-user-biometrics"],[1,"emprender-ub-home"]]]], options);
  });
};

export { defineCustomElements };
