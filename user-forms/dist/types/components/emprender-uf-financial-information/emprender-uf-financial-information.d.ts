import { EventEmitter } from '../../stencil-public-runtime';
import { FinancialInformation } from '../../module/models';
export declare class EmprenderUfFinancialInformation {
  model: FinancialInformation;
  infoSaved: EventEmitter<FinancialInformation>;
  back: EventEmitter<FinancialInformation>;
  requiredData: string;
  flow: any;
  host: HTMLElement;
  _setModel(field: string, value: string, reloadModel?: boolean): void;
  _calculateTotalIncomes(field: string, value: string): void;
  _calculateTotalExpenses(field: string, value: string): void;
  _calculateTotalField(targetField: string, fields: string[]): void;
  _checkSubmitInfo(): void;
  render(): any;
}
