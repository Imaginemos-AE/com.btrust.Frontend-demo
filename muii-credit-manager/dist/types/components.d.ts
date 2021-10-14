/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface EmprenderCiResult {
        "status": 'initial' | 'approved' | 'rejected';
    }
    interface EmprenderCreditInformation {
        "userDocumentId": string;
    }
}
declare global {
    interface HTMLEmprenderCiResultElement extends Components.EmprenderCiResult, HTMLStencilElement {
    }
    var HTMLEmprenderCiResultElement: {
        prototype: HTMLEmprenderCiResultElement;
        new (): HTMLEmprenderCiResultElement;
    };
    interface HTMLEmprenderCreditInformationElement extends Components.EmprenderCreditInformation, HTMLStencilElement {
    }
    var HTMLEmprenderCreditInformationElement: {
        prototype: HTMLEmprenderCreditInformationElement;
        new (): HTMLEmprenderCreditInformationElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-ci-result": HTMLEmprenderCiResultElement;
        "emprender-credit-information": HTMLEmprenderCreditInformationElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderCiResult {
        "onContinue"?: (event: CustomEvent<void>) => void;
        "status"?: 'initial' | 'approved' | 'rejected';
    }
    interface EmprenderCreditInformation {
        "userDocumentId"?: string;
    }
    interface IntrinsicElements {
        "emprender-ci-result": EmprenderCiResult;
        "emprender-credit-information": EmprenderCreditInformation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-ci-result": LocalJSX.EmprenderCiResult & JSXBase.HTMLAttributes<HTMLEmprenderCiResultElement>;
            "emprender-credit-information": LocalJSX.EmprenderCreditInformation & JSXBase.HTMLAttributes<HTMLEmprenderCreditInformationElement>;
        }
    }
}
