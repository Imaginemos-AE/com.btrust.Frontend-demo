import { createStore } from "@stencil/store";
import { calculateValues } from './../modules/credit-simulator.module';
import { getCreditConfigurationsService } from "../services/credit-simulator.services";
const [storageConfigKey, storageCreditKey] = ["muiiCurentCofiguration", "muiiCurrentCreditInfo"];
const { state } = createStore({
  configurations: [],
  currentCofiguration: null,
  currentCreditInfo: {
    creditTypeId: 1,
    creditAmount: 1000000,
    creditTerm: 60,
    creditTotal: 0,
  }
});
export async function getCreditConfigurations() {
  try {
    state.configurations = (await getCreditConfigurationsService()).CreditLines;
  }
  catch (e) {
    state.configurations = [];
  }
}
export function loadDefaultData() {
  const [storageConfig, storageCredit] = [storageConfigKey, storageCreditKey].map(key => localStorage.getItem(key));
  state.currentCofiguration = storageConfig ? JSON.parse(storageConfig) : (state.configurations.length > 0 ? state.configurations[0] : null);
  if (storageCredit) {
    state.currentCreditInfo = JSON.parse(storageCredit);
  }
  else {
    setCreditInfo({});
  }
  ;
}
export function setCreditInfo(newData) {
  const initialData = Object.assign(Object.assign({}, state.currentCreditInfo), newData);
  const { creditAmount, creditTerm } = initialData;
  const rateConfig = state.currentCofiguration.Rates.find(_rate => creditAmount >= _rate.MinAmount && creditAmount <= _rate.MaxAmount);
  state.currentCreditInfo = Object.assign(Object.assign({}, initialData), calculateValues(creditAmount, creditTerm, rateConfig));
  localStorage.setItem(storageCreditKey, JSON.stringify(state.currentCreditInfo));
}
export function setCurrentConfiguration(configId) {
  state.currentCofiguration = state.configurations.find(_config => _config.id === configId);
  localStorage.setItem(storageConfigKey, JSON.stringify(state.currentCofiguration));
  setCreditInfo({
    creditTypeId: state.currentCofiguration.id,
    creditTypeLabel: state.currentCofiguration.Name,
    creditAmount: state.currentCofiguration.Rates[0].MinAmount,
    creditTerm: state.currentCofiguration.Rates[0].MinTerm
  });
}
export function getConfigurationById(configId) {
  return state.configurations.find(_config => _config.id === configId);
}
export default state;
