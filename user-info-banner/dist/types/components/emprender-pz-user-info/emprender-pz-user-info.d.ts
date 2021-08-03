import { EventEmitter } from '../../stencil-public-runtime';
export declare class PrivateZoneInfo {
  logout: EventEmitter;
  changePass: EventEmitter;
  userInfo: any;
  authService: any;
  kcInstance: any;
  userCalculated: any;
  componentWillLoad(): Promise<void>;
  clickLogout(): void;
  clickSetPassword(): void;
  render(): any;
}
