/* EmprenderUserForms custom elements bundle */

import type { Components, JSX } from "../types/components";

interface EmprenderUfCompanyInformation extends Components.EmprenderUfCompanyInformation, HTMLElement {}
export const EmprenderUfCompanyInformation: {
  prototype: EmprenderUfCompanyInformation;
  new (): EmprenderUfCompanyInformation;
};

interface EmprenderUfFinancialInformation extends Components.EmprenderUfFinancialInformation, HTMLElement {}
export const EmprenderUfFinancialInformation: {
  prototype: EmprenderUfFinancialInformation;
  new (): EmprenderUfFinancialInformation;
};

interface EmprenderUfPersonalInformation extends Components.EmprenderUfPersonalInformation, HTMLElement {}
export const EmprenderUfPersonalInformation: {
  prototype: EmprenderUfPersonalInformation;
  new (): EmprenderUfPersonalInformation;
};

interface EmprenderUfPersonalInformation2 extends Components.EmprenderUfPersonalInformation2, HTMLElement {}
export const EmprenderUfPersonalInformation2: {
  prototype: EmprenderUfPersonalInformation2;
  new (): EmprenderUfPersonalInformation2;
};

interface EmprenderUfPersonalInformation3 extends Components.EmprenderUfPersonalInformation3, HTMLElement {}
export const EmprenderUfPersonalInformation3: {
  prototype: EmprenderUfPersonalInformation3;
  new (): EmprenderUfPersonalInformation3;
};

interface EmprenderUfReferences extends Components.EmprenderUfReferences, HTMLElement {}
export const EmprenderUfReferences: {
  prototype: EmprenderUfReferences;
  new (): EmprenderUfReferences;
};

interface EmprenderUfWorkingInformation extends Components.EmprenderUfWorkingInformation, HTMLElement {}
export const EmprenderUfWorkingInformation: {
  prototype: EmprenderUfWorkingInformation;
  new (): EmprenderUfWorkingInformation;
};

interface EmprenderUserForms extends Components.EmprenderUserForms, HTMLElement {}
export const EmprenderUserForms: {
  prototype: EmprenderUserForms;
  new (): EmprenderUserForms;
};

interface EmprenderUserProfile extends Components.EmprenderUserProfile, HTMLElement {}
export const EmprenderUserProfile: {
  prototype: EmprenderUserProfile;
  new (): EmprenderUserProfile;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
