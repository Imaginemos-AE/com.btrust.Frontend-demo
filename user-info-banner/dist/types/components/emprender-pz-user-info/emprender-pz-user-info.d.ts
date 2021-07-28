import { EventEmitter } from "../../stencil-public-runtime";
import { PrivateInformation } from '../../module/models';
export declare class PrivateZoneInfo {
  userInfo: PrivateInformation;
  logout: EventEmitter;
  changePass: EventEmitter;
  authService: any;
  kcInstance: any;
  userCalculated: any;
  componentWillLoad(): Promise<void>;
  clickLogout(): void;
  clickSetPassword(): void;
  render(): any;
}
