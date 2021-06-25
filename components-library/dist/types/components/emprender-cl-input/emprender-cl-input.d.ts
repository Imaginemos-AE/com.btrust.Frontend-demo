import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderClInput implements ComponentInterface {
  textInput: HTMLInputElement;
  numberMask: any;
  label: string;
  inputOptions: any;
  requiredIndicator: boolean;
  maskOptions: any;
  value: string;
  inputChange: EventEmitter<string>;
  componentDidLoad(): void;
  onInputChange(): void;
  render(): any;
}
