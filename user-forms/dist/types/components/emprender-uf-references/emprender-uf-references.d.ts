import { EventEmitter } from '../../stencil-public-runtime';
import { References } from '../../module/models';
export declare class EmprenderUfReferences {
  model: References;
  infoSaved: EventEmitter<References>;
  _setModel(field: string, value: string): void;
  render(): any;
}
