import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { FinancialInformation } from '../../module/models';
export declare class EmprenderUfFinancialInformation implements ComponentInterface {
  model: FinancialInformation;
  infoSaved: EventEmitter<FinancialInformation>;
  componentWillLoad(): Promise<void>;
  _setModel(field: string, value: string): void;
  render(): any;
}
