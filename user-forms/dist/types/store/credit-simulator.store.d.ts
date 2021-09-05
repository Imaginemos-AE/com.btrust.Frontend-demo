import { Credit, CreditLinesEntity } from './../modules/credit-simulator.module';
declare const state: {
  configurations: any[];
  currentCofiguration: CreditLinesEntity;
  currentCreditInfo: Credit;
};
export declare function getCreditConfigurations(): Promise<void>;
export declare function loadDefaultData(): void;
export declare function setCreditInfo(newData: any): void;
export declare function setCurrentConfiguration(configId: number): void;
export declare function getConfigurationById(configId: number): any;
export default state;
