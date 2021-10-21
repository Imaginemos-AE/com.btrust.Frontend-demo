const USER_FORM_DATA_KEY = "muiiUserFormInfo";
function getData() {
  const data = localStorage.getItem(USER_FORM_DATA_KEY);
  return JSON.parse(data !== null && data !== void 0 ? data : "{}");
}
function getDataByField(field) {
  return getData()[field];
}
function setData(newData) {
  const currentData = getData();
  const newUserForm = Object.assign(Object.assign({}, currentData), newData);
  localStorage.setItem(USER_FORM_DATA_KEY, JSON.stringify(newUserForm));
}
const FINANCIAL_OPTIONS = {
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

export { FINANCIAL_OPTIONS as F, getData as a, getDataByField as g, setData as s };
