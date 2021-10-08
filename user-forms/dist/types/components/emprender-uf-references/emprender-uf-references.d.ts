import { EventEmitter } from '../../stencil-public-runtime';
import { References } from '../../module/models';
export declare class EmprenderUfReferences {
  model: References;
  viewRegistration: boolean;
  requiredData: string;
  flow: any;
  infoSaved: EventEmitter<References>;
  back: EventEmitter<References>;
  upgradeInfo: EventEmitter<References>;
  _setModel(field: string, value: string): void;
  _checkSubmitInfo(): void;
  _getSecondTitle(): "Referencia Comercial" | "3. Referencia Comercial" | "Referencia Personal" | "3. Referencia Personal";
  getSecondReferencie(): any;
  render(): any;
}
