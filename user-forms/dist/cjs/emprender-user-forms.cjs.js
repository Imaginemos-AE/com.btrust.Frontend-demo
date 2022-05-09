'use strict';

const index = require('./index-fff3a53f.js');

/*
 Stencil Client Patch Browser v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('emprender-user-forms.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["emprender-user-administrative.cjs",[[1,"emprender-user-administrative",{"documentId":[1537,"document-id"],"userInformation":[1544,"user-information"]}]]],["emprender-user-bank_2.cjs",[[1,"emprender-user-bank",{"model":[1040],"requiredData":[1537,"required-data"],"adminZone":[4,"admin-zone"]}],[1,"emprender-user-forms",{"flowType":[1537,"flow-type"],"step":[1538],"loading":[1540]}]]],["emprender-uf-company-information.cjs",[[1,"emprender-uf-company-information",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-personal-information.cjs",[[1,"emprender-uf-personal-information",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-personal-information-2.cjs",[[1,"emprender-uf-personal-information-2",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-working-information.cjs",[[1,"emprender-uf-working-information",{"model":[1040],"viewRegistration":[4,"view-registration"],"requiredData":[1537,"required-data"]}]]],["emprender-user-profile.cjs",[[1,"emprender-user-profile",{"flowType":[1,"flow-type"],"step":[1538],"loading":[1540],"barState":[1537,"bar-state"],"alarmUpgrade":[1540,"alarm-upgrade"]}]]],["emprender-uf-company-profile_5.cjs",[[1,"emprender-uf-company-profile",{"model":[1040],"requiredData":[1537,"required-data"],"viewRegistration":[4,"view-registration"],"adminZone":[1540,"admin-zone"],"departments":[32]}],[1,"emprender-uf-financial-company",{"model":[1040],"adminZone":[1540,"admin-zone"],"requiredData":[1040]}],[1,"emprender-uf-financial-information",{"model":[1040],"adminZone":[1540,"admin-zone"],"requiredData":[1040]}],[1,"emprender-uf-personal-information-3",{"model":[1040],"model2":[1040],"model3":[1040],"requiredData":[1537,"required-data"],"adminZone":[1540,"admin-zone"],"departments":[32]}],[1,"emprender-uf-references",{"model":[1040],"viewRegistration":[4,"view-registration"],"requiredData":[1537,"required-data"],"flow":[1544],"adminZone":[1540,"admin-zone"]}]]]], options);
});
