import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class EmprenderCsSlider implements ComponentInterface {
  slider: any;
  refreshSlider: boolean;
  value: number;
  label: string;
  min: number;
  minLabel?: string;
  max: number;
  maxLabel?: string;
  step: number;
  formatter?: (value: number) => string;
  sliderChange: EventEmitter<{
    value: number;
    formatedValue?: string;
  }>;
  host: HTMLElement;
  updateBoundaries(min: number, max: number, step: number, minLabel: string, maxLabel: string): Promise<void>;
  componentDidLoad(): void;
  componentDidRender(): void;
  emitChange(): void;
  render(): any;
}
