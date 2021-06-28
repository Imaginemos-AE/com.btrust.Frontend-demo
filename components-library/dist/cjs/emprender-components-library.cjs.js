'use strict';

const index = require('./index-6a0c231d.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('emprender-components-library.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["emprender-cl-button_4.cjs",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513],"buttonStyle":[520,"button-style"]}],[1,"emprender-cl-icon",{"icon":[513]}],[1,"emprender-cl-input",{"label":[1],"inputOptions":[8,"input-options"],"requiredIndicator":[4,"required-indicator"],"maskOptions":[8,"mask-options"],"maskValue":[1,"mask-value"],"value":[1537]}],[1,"emprender-cl-select",{"label":[1],"options":[16],"value":[1537],"selectInputOptions":[8,"select-input-options"],"requiredIndicator":[4,"required-indicator"]}]]]], options);
});
