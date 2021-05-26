export declare const TERM_MODULE = 30;
export declare function calculateValues(creditAmount: number, term: number, config: RatesEntity): Credit;
export declare function getBoundaries(creditConfig: CreditLinesEntity): CreditBoundaries;
export interface CreditBoundaries {
  minAmount: number;
  maxAmount: number;
  minTerm: number;
  maxTerm: number;
}
export interface Credit {
  creditTypeId: number;
  creditTypeLabel: string;
  creditAmount: number;
  creditTerm: number;
  creditValue: number;
  creditInterest: number;
  creditTotal: number;
  creditPMT: number;
  creditTaxes: number;
  creditGuarantee: number;
  creditInsurance: number;
  creditPlatform: number;
  creditFirstCapital: number;
  creditAdmin: number;
}
export interface CreditConfiguration {
  CreditLines: CreditLinesEntity[];
}
export interface CreditLinesEntity {
  id: number;
  Name: string;
  Rates: RatesEntity[];
}
export interface RatesEntity {
  MinAmount: number;
  MaxAmount: number;
  MinTerm: number;
  Maxterm: number;
  GuarateeRate: number;
  AnualEffectiverate: number;
  MonthlyEffectiveRate: number;
  LifeInsuranceRate: number;
  AdministrationFee: number;
  PlattformUseFee: number;
  TaxesRate: number;
}
