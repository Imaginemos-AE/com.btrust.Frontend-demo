import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { UserForm } from '../../module/models';
export declare class EmprenderUserForms implements ComponentInterface {
  flowType: 'employee' | 'independent';
  step: number;
  loading: boolean;
  infoSaved: EventEmitter<UserForm>;
  backSaved: EventEmitter<UserForm>;
  componentWillLoad(): Promise<void>;
  _getFlow: () => {
    tag: string;
    field: string;
  }[];
  _getData: (field: string) => any;
  isLoading(): void;
  getLoadingGif: () => any;
  _renderCurrentStep(): any;
  _updateStep(direction: 'up' | 'down'): void;
  saveInfo(field: string, data: any): void;
  onBackPressed(field: string, data: any): void;
  componentWillRender(): void;
  render(): any;
}
