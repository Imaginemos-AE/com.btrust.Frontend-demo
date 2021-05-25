export interface CurrencyValue {
  key: string;
  label: string;
  subLabel?: string;
  value: number;
  tooltip?: string;
  space?: boolean;
}
export interface SliderValue {
  key: string;
  label: string;
  min: number;
  max: number;
  step: number;
  labelType: 'currency' | 'day';
  value: number;
}
/**
 * variables
 */
export declare const DEFAULT_SLIDER_VALUES: Array<SliderValue>;
export declare const DEFAULT_CURRENCY_VALUES: Array<CurrencyValue>;
