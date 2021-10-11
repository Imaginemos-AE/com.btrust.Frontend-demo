import { EventEmitter } from '../../stencil-public-runtime';
import { FinancialInformation } from '../../module/models';
export declare class EmprenderUfFinancialInformation {
  model: FinancialInformation;
  infoSaved: EventEmitter<FinancialInformation>;
  back: EventEmitter<FinancialInformation>;
  requiredData: any[];
  flow: any;
  fileName: string;
  _setModel(field: string, value: string, reloadModel?: boolean): void;
  _calculateTotalIncomes(field: string, value: string): void;
  _calculateTotalExpenses(field: string, value: string): void;
  _calculateTotalField(targetField: string, fields: string[]): void;
  _validateOtherInformation(field: string): boolean;
  _checkSubmitInfo(): void;
  onInputChange(files: FileList): void;
  render(): any;
}
