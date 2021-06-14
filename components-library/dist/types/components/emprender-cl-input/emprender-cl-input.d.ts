import { EventEmitter } from '../../stencil-public-runtime';
export declare class EmprenderClInput {
  label: string;
  inputOptions: any;
  requiredIndicator: boolean;
  value: string;
  inputChange: EventEmitter<string>;
  textInput: HTMLInputElement;
  onInputChange(): void;
  render(): any;
}
