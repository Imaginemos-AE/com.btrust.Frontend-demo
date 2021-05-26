import { Credit, CreditLinesEntity } from './../modules/credit-simulator.module';
declare const state: {
  configurations: any[];
  curentCofiguration: CreditLinesEntity;
  currentCreditInfo: Credit;
};
export declare function getCreditConfigurations(): Promise<void>;
export declare function setCreditInfo(newData: any): void;
export declare function setCurrentConfiguration(configId: number): void;
export default state;
