import { ComponentInterface } from '../../stencil-public-runtime';
import { CreditTermBoundaries } from '../../modules/credit-simulator.module';
import { CurrencyValue, SliderConfig } from './emprender-credit-simulator-util';
export declare class EmprenderCreditSimulator implements ComponentInterface {
  host: any;
  sliderValues: Array<SliderConfig>;
  currencyValues: Array<CurrencyValue>;
  termSliderOrder: string;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  _loadDefaultConfig(): void;
  _sliderChange(field: string, data: {
    value: number;
    metric?: string;
  }): void;
  _creditTypeChange(creditTypeId: number, avoidBoundaries?: boolean): void;
  _calculateBoundaries(creditTypeId: number, avoidBoundaries: boolean): void;
  calculateFieldBoundaries(sliderConfig: SliderConfig, creditTypeId: number, avoidBoundaries?: boolean): void;
  getFieldBoundaries(field: string, creditTypeId: number): import("../../modules/credit-simulator.module").CreditAmountBoundaries | CreditTermBoundaries;
  renderTotal(): string;
  render(): any;
}
