import { ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderCsSlider implements ComponentInterface {
  slider: any;
  value: number;
  label: string;
  min: number;
  minLabel?: string;
  max: number;
  maxLabel?: string;
  step: number;
  host: HTMLElement;
  componentDidLoad(): void;
  render(): any;
}
