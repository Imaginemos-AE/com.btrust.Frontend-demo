import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { WorkingInformation } from '../../module/models';
export declare class EmprenderUfWorkingInformation implements ComponentInterface {
  model: WorkingInformation;
  infoSaved: EventEmitter<WorkingInformation>;
  componentWillLoad(): Promise<void>;
  _setModel(field: string, value: string): void;
  render(): any;
}
