import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderClInput implements ComponentInterface {
  textInput: HTMLInputElement;
  inputMask: any;
  internalChange: boolean;
  label: string;
  inputOptions: any;
  requiredIndicator: boolean;
  maskOptions: any;
  value: string;
  changeMaskValue(): void;
  inputChange: EventEmitter<string>;
  componentDidLoad(): void;
  onInputChange(): void;
  render(): any;
}
