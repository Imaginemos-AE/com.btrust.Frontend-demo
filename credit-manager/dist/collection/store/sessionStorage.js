const USER_CREDIT_DATA_KEY = "muiiUserCreditInfo";
export function getData() {
  const data = sessionStorage.getItem(USER_CREDIT_DATA_KEY);
  return JSON.parse(data);
}
export function setData(data) {
  sessionStorage.setItem(USER_CREDIT_DATA_KEY, JSON.stringify(data));
}
