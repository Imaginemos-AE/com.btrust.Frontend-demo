import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
import { References } from '../../module/models';
export declare class EmprenderUfReferences implements ComponentInterface {
  model: References;
  infoSaved: EventEmitter<References>;
  componentWillLoad(): Promise<void>;
  _setModel(field: string, value: string): void;
  render(): any;
}
