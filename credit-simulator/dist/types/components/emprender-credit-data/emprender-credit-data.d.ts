import { ComponentInterface } from '../../stencil-public-runtime';
import { CurrencyValue } from '../emprender-credit-simulator/emprender-credit-simulator-util';
import { Credit } from '../../modules/credit-simulator.module';
export declare class EmprenderCreditSimulator implements ComponentInterface {
  currencyValues: Array<CurrencyValue>;
  getFieldSubLabel(subLabel: string | ((credit: Credit) => string)): string;
  getPayDay(days: any): string;
  componentWillLoad(): void;
  render(): any;
}
