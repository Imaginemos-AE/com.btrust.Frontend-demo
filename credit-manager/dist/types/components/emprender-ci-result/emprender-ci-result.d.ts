import { ComponentInterface } from '../../stencil-public-runtime';
export declare class EmprenderUserBiometrics implements ComponentInterface {
  status: 'initial' | 'approved' | 'rejected';
  componentWillLoad(): Promise<void>;
  _renderStatus(): any;
  _renderAppoved(): any;
  _changeWindowLocation(): void;
  _renderRejected(): any;
  render(): any;
}
