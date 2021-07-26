import { EventEmitter } from "../../stencil-public-runtime";
import { PrivateInformation } from '../../module/models';
export declare class PrivateZoneInfo {
  userInfo: PrivateInformation;
  logout: EventEmitter;
  changePass: EventEmitter;
  componentWillLoad(): Promise<void>;
  render(): any;
}
