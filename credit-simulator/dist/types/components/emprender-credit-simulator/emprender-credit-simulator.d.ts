import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { Credit, CreditTermBoundaries } from '../../modules/credit-simulator.module';
import { CurrencyValue, SliderConfig } from './emprender-credit-simulator-util';
export declare class EmprenderCreditSimulator implements ComponentInterface {
  host: any;
  sliderValues: Array<SliderConfig>;
  currencyValues: Array<CurrencyValue>;
  termSliderOrder: string;
  creditRequested: EventEmitter<Credit>;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  _loadDefaultConfig(): void;
  _sliderChange(field: string, data: {
    value: number;
    metric?: string;
  }): void;
  _creditTypeChange(creditTypeId: number): void;
  _calculateBoundaries(creditTypeId: number, calcBoundaries: boolean): void;
  calculateFieldBoundaries(sliderConfig: SliderConfig, creditTypeId: number, calcBoundaries?: boolean, resetSlider?: boolean): void;
  getFieldBoundaries(field: string, creditTypeId: number): import("../../modules/credit-simulator.module").CreditAmountBoundaries | CreditTermBoundaries;
  getFieldSubLabel(subLabel: string | ((credit: Credit) => string)): string;
  renderTotal(): string;
  render(): any;
}
