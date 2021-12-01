import { EventEmitter } from '../../stencil-public-runtime';
import { References } from '../../module/models';
export declare class EmprenderUfReferences {
  model: References;
  viewRegistration: boolean;
  requiredData: string;
  flow: any;
  adminZone: boolean;
  infoSaved: EventEmitter<References>;
  back: EventEmitter<References>;
  upgradeInfo: EventEmitter<References>;
  _setModel(field: string, value: string): void;
  _checkSubmitInfo(): void;
  _getFirstTitle(): any;
  _getSecondTitle(): any;
  getSecondReferencie(): any;
  render(): any;
}
