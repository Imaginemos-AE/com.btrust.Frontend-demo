import { ComponentInterface } from '../../stencil-public-runtime';
import { CurrencyValue, SliderConfig } from './emprender-credit-simulator-util';
export declare class EmprenderCreditSimulator implements ComponentInterface {
  host: any;
  sliderValues: Array<SliderConfig>;
  currencyValues: Array<CurrencyValue>;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  _loadDefaultConfig(): void;
  _sliderChange(field: string, data: {
    value: number;
    metric?: string;
  }): void;
  _creditTypeChange(creditTypeId: number): void;
  _calculateBoundaries(creditTypeId: number): void;
  render(): any;
}
