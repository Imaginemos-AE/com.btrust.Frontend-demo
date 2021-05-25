import { ComponentInterface } from '../../stencil-public-runtime';
import { CurrencyValue, SliderValue } from './emprender-credit-simulator-util';
export declare class EmprenderCreditSimulator implements ComponentInterface {
  host: any;
  sliderValues: Array<SliderValue>;
  currencyValues: Array<CurrencyValue>;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
