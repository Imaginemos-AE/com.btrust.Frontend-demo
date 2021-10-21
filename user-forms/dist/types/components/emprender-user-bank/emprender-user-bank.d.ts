import { BankInformation } from '../../module/models';
export declare class EmprenderUfReferences {
  model: BankInformation;
  requiredData: string;
  componentWillLoad(): Promise<void>;
  _setModel(field: string, value: string): void;
  _checkSubmitInfo(): void;
  render(): any;
}
