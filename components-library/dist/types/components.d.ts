/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface EmprenderClButton {
        "buttonStyle": any;
        "modifiers": string;
        "text": string;
    }
    interface EmprenderClIcon {
        "icon": string;
        "path": number;
    }
    interface EmprenderClInput {
        "checkData": boolean;
        "dataType": string;
        "inputOptions": any;
        "label": string;
        "maskOptions": any;
        "maskValue": 'masked' | 'unmasked';
        "requiredIndicator": boolean;
        "value": string;
    }
    interface EmprenderClSelect {
        "checkData": boolean;
        "label": string;
        "options": { name: string, id: string }[];
        "requiredIndicator": boolean;
        "selectInputOptions": any;
        "value": string;
    }
}
declare global {
    interface HTMLEmprenderClButtonElement extends Components.EmprenderClButton, HTMLStencilElement {
    }
    var HTMLEmprenderClButtonElement: {
        prototype: HTMLEmprenderClButtonElement;
        new (): HTMLEmprenderClButtonElement;
    };
    interface HTMLEmprenderClIconElement extends Components.EmprenderClIcon, HTMLStencilElement {
    }
    var HTMLEmprenderClIconElement: {
        prototype: HTMLEmprenderClIconElement;
        new (): HTMLEmprenderClIconElement;
    };
    interface HTMLEmprenderClInputElement extends Components.EmprenderClInput, HTMLStencilElement {
    }
    var HTMLEmprenderClInputElement: {
        prototype: HTMLEmprenderClInputElement;
        new (): HTMLEmprenderClInputElement;
    };
    interface HTMLEmprenderClSelectElement extends Components.EmprenderClSelect, HTMLStencilElement {
    }
    var HTMLEmprenderClSelectElement: {
        prototype: HTMLEmprenderClSelectElement;
        new (): HTMLEmprenderClSelectElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-cl-button": HTMLEmprenderClButtonElement;
        "emprender-cl-icon": HTMLEmprenderClIconElement;
        "emprender-cl-input": HTMLEmprenderClInputElement;
        "emprender-cl-select": HTMLEmprenderClSelectElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderClButton {
        "buttonStyle"?: any;
        "modifiers"?: string;
        "text"?: string;
    }
    interface EmprenderClIcon {
        "icon"?: string;
        "path"?: number;
    }
    interface EmprenderClInput {
        "checkData"?: boolean;
        "dataType"?: string;
        "inputOptions"?: any;
        "label"?: string;
        "maskOptions"?: any;
        "maskValue"?: 'masked' | 'unmasked';
        "onInputChange"?: (event: CustomEvent<string>) => void;
        "requiredIndicator"?: boolean;
        "value"?: string;
    }
    interface EmprenderClSelect {
        "checkData"?: boolean;
        "label"?: string;
        "onSelectChange"?: (event: CustomEvent<string>) => void;
        "options"?: { name: string, id: string }[];
        "requiredIndicator"?: boolean;
        "selectInputOptions"?: any;
        "value"?: string;
    }
    interface IntrinsicElements {
        "emprender-cl-button": EmprenderClButton;
        "emprender-cl-icon": EmprenderClIcon;
        "emprender-cl-input": EmprenderClInput;
        "emprender-cl-select": EmprenderClSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-cl-button": LocalJSX.EmprenderClButton & JSXBase.HTMLAttributes<HTMLEmprenderClButtonElement>;
            "emprender-cl-icon": LocalJSX.EmprenderClIcon & JSXBase.HTMLAttributes<HTMLEmprenderClIconElement>;
            "emprender-cl-input": LocalJSX.EmprenderClInput & JSXBase.HTMLAttributes<HTMLEmprenderClInputElement>;
            "emprender-cl-select": LocalJSX.EmprenderClSelect & JSXBase.HTMLAttributes<HTMLEmprenderClSelectElement>;
        }
    }
}
