import { ComponentInterface } from '../../stencil-public-runtime';
import { CurrencyValue } from '../emprender-credit-simulator/emprender-credit-simulator-util';
import { Credit } from '../../modules/credit-simulator.module';
export declare class EmprenderCreditSimulator implements ComponentInterface {
  currentCreditInfo: string;
  currencyValues: Array<CurrencyValue>;
  getFieldSubLabel(subLabel: string | ((credit: Credit) => string)): string;
  getPayDay(totalDays: number): string;
  componentWillLoad(): void;
  renderTotal(days: number): string;
  render(): any;
}
