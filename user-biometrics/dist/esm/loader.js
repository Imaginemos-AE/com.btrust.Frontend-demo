import { p as promiseResolve, b as bootstrapLazy } from './index-1752226e.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-ub-failure_2",[[1,"emprender-ub-failure"],[1,"emprender-ub-success"]]],["emprender-user-biometrics-result",[[1,"emprender-user-biometrics-result",{"state":[32]}]]],["emprender-ub-home_2",[[1,"emprender-user-biometrics",{"adoConfig":[1,"ado-config"]}],[1,"emprender-ub-home"]]]], options);
  });
};

export { defineCustomElements };
