import { EventEmitter } from '../../stencil-public-runtime';
export declare class EmprenderClSelect {
  label: string;
  options: {
    name: string;
    id: string;
  }[];
  value: string;
  selectInputOptions: any;
  requiredIndicator: boolean;
  host: HTMLElement;
  selectChange: EventEmitter<string>;
  selectInput: HTMLSelectElement;
  onSelectChange(): void;
  renderOptions(): any[];
  renderSlot(): any[];
  render(): any;
}
