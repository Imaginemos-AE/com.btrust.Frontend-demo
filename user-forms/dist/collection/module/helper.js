const USER_FORM_DATA_KEY = "muiiUserFormInfo";
export function getData() {
  const data = localStorage.getItem(USER_FORM_DATA_KEY);
  return JSON.parse(data !== null && data !== void 0 ? data : "{}");
}
export function getDataByField(field) {
  return getData()[field];
}
export function setData(newData) {
  const currentData = getData();
  const newUserForm = Object.assign(Object.assign({}, currentData), newData);
  localStorage.setItem(USER_FORM_DATA_KEY, JSON.stringify(newUserForm));
}
export const FINANCIAL_OPTIONS = {
  mask: Number,
  scale: 2,
  signed: false,
  thousandsSeparator: '.',
  padFractionalZeros: false,
  normalizeZeros: true,
  radix: ',',
  mapToRadix: [','],
  min: 0
};
