import { p as promiseResolve, b as bootstrapLazy } from './index-f9c46067.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-cl-button_2",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513]}],[1,"emprender-cl-icon",{"icon":[513]}]]]], options);
  });
};

export { defineCustomElements };
