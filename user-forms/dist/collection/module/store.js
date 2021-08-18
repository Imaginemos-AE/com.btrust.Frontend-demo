import { createStore } from "@stencil/store";
import { getData, setData } from "./helper";
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
export default state;
