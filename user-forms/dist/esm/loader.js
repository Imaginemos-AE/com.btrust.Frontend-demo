import { p as promiseResolve, b as bootstrapLazy } from './index-a29c86b7.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-uf-financial-information",[[1,"emprender-uf-financial-information",{"model":[32]}]]],["emprender-uf-personal-information",[[1,"emprender-uf-personal-information",{"model":[32],"departments":[32]}]]],["emprender-uf-personal-information-2",[[1,"emprender-uf-personal-information-2",{"model":[32],"departments":[32]}]]],["emprender-uf-references",[[1,"emprender-uf-references",{"model":[32]}]]],["emprender-uf-working-information",[[1,"emprender-uf-working-information",{"model":[32]}]]]], options);
  });
};

export { defineCustomElements };
