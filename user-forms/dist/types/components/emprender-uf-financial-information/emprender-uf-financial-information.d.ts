import { EventEmitter } from '../../stencil-public-runtime';
import { FinancialInformation } from '../../module/models';
export declare class EmprenderUfFinancialInformation {
  model: FinancialInformation;
  infoSaved: EventEmitter<FinancialInformation>;
  back: EventEmitter<FinancialInformation>;
  _setModel(field: string, value: string): void;
  _calculateTotalIncomes(field: string, value: string): void;
  render(): any;
}
