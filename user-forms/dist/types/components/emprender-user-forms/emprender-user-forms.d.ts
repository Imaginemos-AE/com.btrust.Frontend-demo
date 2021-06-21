import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { UserForm } from '../../module/models';
export declare class EmprenderUserForms implements ComponentInterface {
  flowType: 'employee' | 'independent';
  step: number;
  infoSaved: EventEmitter<UserForm>;
  componentWillLoad(): Promise<void>;
  _getFlow: () => {
    tag: string;
    field: string;
  }[];
  _getData: (field: string) => any;
  _renderCurrentStep(): any;
  saveInfo(field: string, data: any): void;
  render(): any;
}
