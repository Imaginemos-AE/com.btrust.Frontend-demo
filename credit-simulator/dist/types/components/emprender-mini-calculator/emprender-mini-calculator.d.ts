import { ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderMiniCalculator implements ComponentInterface {
  showButtons: boolean;
  displayElement: boolean;
  pressTimer: any;
  pressInterval: any;
  componentWillLoad(): Promise<void>;
  _loadDefaultConfig(): void;
  _toggleButtons(): void;
  setCurrentAmount(operation: 'increase' | 'decrease'): void;
  setCurrentTerm(operation: 'increase' | 'decrease'): void;
  onMouseAmountDown(operation: 'increase' | 'decrease'): void;
  onMouseAmountUp(): void;
  renderMiniCalculator(): any;
  render(): any;
}
