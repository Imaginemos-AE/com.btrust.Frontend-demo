import { ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderUserBiometrics implements ComponentInterface {
  adoConfig: string;
  type: 'validate' | 'check';
  componentWillLoad(): Promise<void>;
  render(): any;
}
