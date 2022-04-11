import { p as promiseResolve, b as bootstrapLazy } from './index-8397afa9.js';

/*
 Stencil Client Patch Esm v2.6.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["emprender-user-administrative",[[1,"emprender-user-administrative",{"documentId":[1537,"document-id"],"userInformation":[1544,"user-information"]}]]],["emprender-uf-company-information",[[1,"emprender-uf-company-information",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-personal-information",[[1,"emprender-uf-personal-information",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-personal-information-2",[[1,"emprender-uf-personal-information-2",{"model":[1040],"requiredData":[1537,"required-data"],"departments":[32]}]]],["emprender-uf-working-information",[[1,"emprender-uf-working-information",{"model":[1040],"viewRegistration":[4,"view-registration"],"requiredData":[1537,"required-data"]}]]],["emprender-user-bank",[[1,"emprender-user-bank",{"model":[1040],"requiredData":[1537,"required-data"],"adminZone":[4,"admin-zone"]}]]],["emprender-user-forms",[[1,"emprender-user-forms",{"flowType":[1537,"flow-type"],"step":[1538],"loading":[1540]}]]],["emprender-user-profile",[[1,"emprender-user-profile",{"flowType":[1,"flow-type"],"step":[1538],"loading":[1540],"barState":[1537,"bar-state"],"alarmUpgrade":[1540,"alarm-upgrade"]}]]],["emprender-uf-company-profile_5",[[1,"emprender-uf-company-profile",{"model":[1040],"requiredData":[1537,"required-data"],"viewRegistration":[4,"view-registration"],"adminZone":[1540,"admin-zone"],"departments":[32]}],[1,"emprender-uf-financial-company",{"model":[1040],"adminZone":[1540,"admin-zone"],"requiredData":[1040]}],[1,"emprender-uf-financial-information",{"model":[1040],"adminZone":[1540,"admin-zone"],"requiredData":[1040]}],[1,"emprender-uf-personal-information-3",{"model":[1040],"model2":[1040],"model3":[1040],"requiredData":[1537,"required-data"],"adminZone":[1540,"admin-zone"],"departments":[32]}],[1,"emprender-uf-references",{"model":[1040],"viewRegistration":[4,"view-registration"],"requiredData":[1537,"required-data"],"flow":[1544],"adminZone":[1540,"admin-zone"]}]]]], options);
  });
};

export { defineCustomElements };
