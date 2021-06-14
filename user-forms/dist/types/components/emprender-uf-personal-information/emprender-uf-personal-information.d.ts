import { ComponentInterface } from '../../stencil-public-runtime';
import { PersonalInformation } from '../../module/models';
export declare class EmprenderUfPersonalInformation implements ComponentInterface {
  model: PersonalInformation;
  componentWillLoad(): Promise<void>;
  _setModel(field: string, value: string): void;
  render(): any;
}
