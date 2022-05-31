import { EventEmitter } from '../../stencil-public-runtime';
import { BankInformation } from '../../module/models';
export declare class EmprenderUfReferences {
  model: BankInformation;
  requiredData: string;
  adminZone: boolean;
  sendBankInfo: EventEmitter<BankInformation>;
  componentWillLoad(): Promise<void>;
  _setModel(field: string, value: string): void;
  _checkSubmitInfo(): void;
  _getFormStructure(): any;
  render(): any;
}
