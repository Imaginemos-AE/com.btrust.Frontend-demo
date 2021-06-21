import { EventEmitter } from '../../stencil-public-runtime';
import { WorkingInformation } from '../../module/models';
export declare class EmprenderUfWorkingInformation {
  model: WorkingInformation;
  infoSaved: EventEmitter<WorkingInformation>;
  _setModel(field: string, value: string): void;
  render(): any;
}
