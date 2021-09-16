import { UserForm } from "./models";
declare const state: {
  currentUserInformation: UserForm;
};
export declare function loadDefaultData(): void;
export declare function setUserInformation(field: string, newData: any): void;
export declare function sendFetch(flowType: string): void;
export default state;
