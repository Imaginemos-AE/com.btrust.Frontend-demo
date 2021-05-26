import { createStore } from "@stencil/store";
import { calculateValues } from './../modules/credit-simulator.module';
import { getCreditConfigurationsService } from "../services/credit-simulator.services";
const { state } = createStore({
  configurations: [],
  curentCofiguration: null,
  currentCreditInfo: {
    creditTypeId: 1,
    creditAmount: 1000000,
    creditTerm: 30,
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
export function setCreditInfo(newData) {
  // state.currentCreditInfo = { ...state.currentCreditInfo, ...newData };
  const initialData = Object.assign(Object.assign({}, state.currentCreditInfo), newData);
  const { creditAmount, creditTerm } = initialData;
  const rateConfig = state.curentCofiguration.Rates.find(_rate => creditAmount >= _rate.MinAmount && creditAmount <= _rate.MaxAmount);
  state.currentCreditInfo = Object.assign(Object.assign({}, initialData), calculateValues(creditAmount, creditTerm, rateConfig));
}
export function setCurrentConfiguration(configId) {
  state.curentCofiguration = state.configurations.find(_config => _config.id === configId);
  setCreditInfo({
    creditTypeId: state.curentCofiguration.id,
    creditTypeLabel: state.curentCofiguration.Name
  });
}
export default state;
