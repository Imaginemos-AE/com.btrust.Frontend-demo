import { createStore } from "@stencil/store";
import { getData, setData } from "./helper";
import { getJsonModelData } from "../server/service";
const { state } = createStore({
  currentUserInformation: {}
});
export function loadDefaultData() {
  state.currentUserInformation = getData();
}
export function setUserInformation(field, newData) {
  state.currentUserInformation = Object.assign(Object.assign({}, state.currentUserInformation), { [field]: newData });
  setData(state.currentUserInformation);
}
export function sendFetch(flowType) {
  getJsonModelData(state.currentUserInformation, flowType);
}
export default state;
