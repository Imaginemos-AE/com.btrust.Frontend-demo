/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { FinancialInformation, PersonalInformation, PersonalInformation2, References, UserForm, WorkingInformation } from "./module/models";
export namespace Components {
    interface EmprenderUfFinancialInformation {
        "model": FinancialInformation;
    }
    interface EmprenderUfPersonalInformation {
        "model": PersonalInformation;
    }
    interface EmprenderUfPersonalInformation2 {
        "model": PersonalInformation2;
    }
    interface EmprenderUfReferences {
        "model": References;
    }
    interface EmprenderUfWorkingInformation {
        "model": WorkingInformation;
    }
    interface EmprenderUserForms {
        "flowType": 'employee' | 'independent';
        "loading": boolean;
        "step": number;
    }
}
declare global {
    interface HTMLEmprenderUfFinancialInformationElement extends Components.EmprenderUfFinancialInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfFinancialInformationElement: {
        prototype: HTMLEmprenderUfFinancialInformationElement;
        new (): HTMLEmprenderUfFinancialInformationElement;
    };
    interface HTMLEmprenderUfPersonalInformationElement extends Components.EmprenderUfPersonalInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfPersonalInformationElement: {
        prototype: HTMLEmprenderUfPersonalInformationElement;
        new (): HTMLEmprenderUfPersonalInformationElement;
    };
    interface HTMLEmprenderUfPersonalInformation2Element extends Components.EmprenderUfPersonalInformation2, HTMLStencilElement {
    }
    var HTMLEmprenderUfPersonalInformation2Element: {
        prototype: HTMLEmprenderUfPersonalInformation2Element;
        new (): HTMLEmprenderUfPersonalInformation2Element;
    };
    interface HTMLEmprenderUfReferencesElement extends Components.EmprenderUfReferences, HTMLStencilElement {
    }
    var HTMLEmprenderUfReferencesElement: {
        prototype: HTMLEmprenderUfReferencesElement;
        new (): HTMLEmprenderUfReferencesElement;
    };
    interface HTMLEmprenderUfWorkingInformationElement extends Components.EmprenderUfWorkingInformation, HTMLStencilElement {
    }
    var HTMLEmprenderUfWorkingInformationElement: {
        prototype: HTMLEmprenderUfWorkingInformationElement;
        new (): HTMLEmprenderUfWorkingInformationElement;
    };
    interface HTMLEmprenderUserFormsElement extends Components.EmprenderUserForms, HTMLStencilElement {
    }
    var HTMLEmprenderUserFormsElement: {
        prototype: HTMLEmprenderUserFormsElement;
        new (): HTMLEmprenderUserFormsElement;
    };
    interface HTMLElementTagNameMap {
        "emprender-uf-financial-information": HTMLEmprenderUfFinancialInformationElement;
        "emprender-uf-personal-information": HTMLEmprenderUfPersonalInformationElement;
        "emprender-uf-personal-information-2": HTMLEmprenderUfPersonalInformation2Element;
        "emprender-uf-references": HTMLEmprenderUfReferencesElement;
        "emprender-uf-working-information": HTMLEmprenderUfWorkingInformationElement;
        "emprender-user-forms": HTMLEmprenderUserFormsElement;
    }
}
declare namespace LocalJSX {
    interface EmprenderUfFinancialInformation {
        "model"?: FinancialInformation;
        "onBack"?: (event: CustomEvent<FinancialInformation>) => void;
        "onInfoSaved"?: (event: CustomEvent<FinancialInformation>) => void;
    }
    interface EmprenderUfPersonalInformation {
        "model"?: PersonalInformation;
        "onInfoSaved"?: (event: CustomEvent<PersonalInformation>) => void;
        "onSendInfo"?: (event: CustomEvent<PersonalInformation>) => void;
    }
    interface EmprenderUfPersonalInformation2 {
        "model"?: PersonalInformation2;
        "onBack"?: (event: CustomEvent<PersonalInformation2>) => void;
        "onInfoSaved"?: (event: CustomEvent<PersonalInformation2>) => void;
    }
    interface EmprenderUfReferences {
        "model"?: References;
        "onBack"?: (event: CustomEvent<References>) => void;
        "onInfoSaved"?: (event: CustomEvent<References>) => void;
    }
    interface EmprenderUfWorkingInformation {
        "model"?: WorkingInformation;
        "onBack"?: (event: CustomEvent<WorkingInformation>) => void;
        "onInfoSaved"?: (event: CustomEvent<WorkingInformation>) => void;
    }
    interface EmprenderUserForms {
        "flowType"?: 'employee' | 'independent';
        "loading"?: boolean;
        "onBackSaved"?: (event: CustomEvent<UserForm>) => void;
        "onInfoSaved"?: (event: CustomEvent<UserForm>) => void;
        "step"?: number;
    }
    interface IntrinsicElements {
        "emprender-uf-financial-information": EmprenderUfFinancialInformation;
        "emprender-uf-personal-information": EmprenderUfPersonalInformation;
        "emprender-uf-personal-information-2": EmprenderUfPersonalInformation2;
        "emprender-uf-references": EmprenderUfReferences;
        "emprender-uf-working-information": EmprenderUfWorkingInformation;
        "emprender-user-forms": EmprenderUserForms;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "emprender-uf-financial-information": LocalJSX.EmprenderUfFinancialInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfFinancialInformationElement>;
            "emprender-uf-personal-information": LocalJSX.EmprenderUfPersonalInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfPersonalInformationElement>;
            "emprender-uf-personal-information-2": LocalJSX.EmprenderUfPersonalInformation2 & JSXBase.HTMLAttributes<HTMLEmprenderUfPersonalInformation2Element>;
            "emprender-uf-references": LocalJSX.EmprenderUfReferences & JSXBase.HTMLAttributes<HTMLEmprenderUfReferencesElement>;
            "emprender-uf-working-information": LocalJSX.EmprenderUfWorkingInformation & JSXBase.HTMLAttributes<HTMLEmprenderUfWorkingInformationElement>;
            "emprender-user-forms": LocalJSX.EmprenderUserForms & JSXBase.HTMLAttributes<HTMLEmprenderUserFormsElement>;
        }
    }
}
