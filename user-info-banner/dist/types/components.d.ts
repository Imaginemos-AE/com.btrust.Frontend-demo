/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface EmprenderPzUserInfo {
    }
}
declare global {
    interface HTMLEmprenderPzUserInfoElement extends Components.EmprenderPzUserInfo, HTMLStencilElement {
    }
    var HTMLEmprenderPzUserInfoElement: {
        prototype: HTMLEmprenderPzUserInfoElement;
        new (): HTMLEmprenderPzUserInfoElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-pz-user-info": HTMLEmprenderPzUserInfoElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderPzUserInfo {
        "onChangePass"?: (event: CustomEvent<any>) => void;
        "onLogout"?: (event: CustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "emprender-pz-user-info": EmprenderPzUserInfo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-pz-user-info": LocalJSX.EmprenderPzUserInfo & JSXBase.HTMLAttributes<HTMLEmprenderPzUserInfoElement>;
        }
    }
}
