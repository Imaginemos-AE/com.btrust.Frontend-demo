import { p as promiseResolve, b as bootstrapLazy } from './index-41cc96ef.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["emprender-cl-button_4",[[1,"emprender-cl-button",{"text":[513],"modifiers":[513],"buttonStyle":[520,"button-style"]}],[1,"emprender-cl-icon",{"icon":[513],"path":[514]}],[1,"emprender-cl-input",{"label":[1],"inputOptions":[8,"input-options"],"requiredIndicator":[1540,"required-indicator"],"maskOptions":[8,"mask-options"],"maskValue":[1,"mask-value"],"value":[1537],"checkData":[1540,"check-data"],"dataType":[1537,"data-type"]}],[1,"emprender-cl-select",{"label":[1],"options":[16],"value":[1537],"selectInputOptions":[8,"select-input-options"],"requiredIndicator":[4,"required-indicator"],"checkData":[1540,"check-data"]}]]]], options);
});
