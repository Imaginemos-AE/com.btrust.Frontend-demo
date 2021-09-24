import { p as promiseResolve, b as bootstrapLazy } from './index-6b51ac5c.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-ub-home_2",[[1,"emprender-ub-home"],[1,"emprender-ub-signature"]]],["emprender-user-biometrics",[[1,"emprender-user-biometrics",{"adoConfig":[1,"ado-config"],"type":[1]}]]],["emprender-ub-failure_3",[[1,"emprender-user-biometrics-result",{"state":[1],"type":[1]}],[1,"emprender-ub-failure",{"type":[1]}],[1,"emprender-ub-success",{"type":[1]}]]]], options);
  });
};

export { defineCustomElements };
