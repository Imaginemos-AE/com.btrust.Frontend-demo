import { EventEmitter, ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderClInput implements ComponentInterface {
  textInput: HTMLInputElement;
  inputMask: any;
  label: string;
  inputOptions: any;
  requiredIndicator: boolean;
  maskOptions: any;
  maskValue: 'masked' | 'unmasked';
  value: string;
  checkData: boolean;
  dataType: string;
  host: HTMLElement;
  changeMaskValue(): void;
  inputChange: EventEmitter<string>;
  componentDidLoad(): Promise<void>;
  onInputChange(ev: any): void;
  getMaskCalculatedValue(): any;
  setValue(newValue: string): void;
  render(): any;
}
