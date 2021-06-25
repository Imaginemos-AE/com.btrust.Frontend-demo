import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderClInput implements ComponentInterface {
  textInput: HTMLInputElement;
  inputMask: any;
  label: string;
  inputOptions: any;
  requiredIndicator: boolean;
  maskOptions: any;
  maskValue: "masked" | "unmasked";
  value: string;
  changeMaskValue(): void;
  inputChange: EventEmitter<string>;
  componentDidLoad(): void;
  onInputChange(): void;
  getMaskCalculatedValue(): any;
  setValue(newValue: string): void;
  render(): any;
}
