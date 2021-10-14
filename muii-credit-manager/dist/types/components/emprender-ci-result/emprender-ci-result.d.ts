import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class EmprenderUserBiometrics implements ComponentInterface {
  status: 'initial' | 'approved' | 'rejected';
  continue: EventEmitter<void>;
  componentWillLoad(): Promise<void>;
  _renderStatus(): any;
  _renderAppoved(): any;
  _renderRejected(): any;
  render(): any;
}
