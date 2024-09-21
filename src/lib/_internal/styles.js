import { ButtonType, HorizontalAlignment, TextAlign } from "./types.js";

const INPUT_STYLES = "block w-full font-light text-sm px-2.5 pt-2 pb-1 border focus:outline-none";
const INPUT_VALID_STYLES = "border-[#dee1e3] focus:ring-[#337ab7] focus:border-1";
const INPUT_INVALID_STYLES = "border-[#f05b41] focus:ring-[#f05b41] focus:ring-0";
const TEXTAREA_STYLES = "block w-full font-light text-sm px-2.5 pt-2 pb-1 border border-[#dee1e3] focus:outline-none focus:ring-1 focus:ring-[#337ab7] resize-none focus:border-0";
const SELECT_STYLES = "block w-full font-light text-sm px-2.5 pt-2 pb-1 border border-[#dee1e3] focus:outline-none focus:ring-1 focus:ring-[#337ab7] appearance-none focus:border-0 cursor-pointer";
const LABEL_STYLES = "absolute left-2 top-2 font-renular text-xs text-[#8a9baa] bg-white pointer-events-none transform -translate-y-1/2";
const REQUIRED_STYLES = "text-[#f05b41] font-thin";
const VALITATION_MESSAGE_STYLES = "absolute inline-block text-white text-xs bg-red-500 px-2 font-light";
const INPUT_LABEL_GROUP_STYLES = "relative pt-2";
const SELECT_BUTTON_STYLES = "pointer-events-none absolute top-4 botton-0 right-0 flex items-center px-2 text-gray-700";
const BUTTON_NORMAL_STYLES = "border rounded text-gray-500 text-sm font-light bg-white px-4";
const BUTTON_DEFAULT_STYLES = "border rounded text-white text-sm font-light bg-[#337ab7] px-4";
const BUTTON_SUCCESS_STYLES = "border rounded text-white text-sm font-light bg-[#5cb85c] px-4";
const BUTTON_DANGER_STYLES = "border rounded text-white text-sm font-light bg-[#d9534f] px-4";

export const cssUtils = {
    normalize: (str) => {
        if (str && typeof str === 'number') {
            const num = parseFloat(str);
            if (isNaN(num)) {
                return '';
            }

            return `${num}px`;
        }

        if (str === 'auto' || str.endsWith('px') || str.endsWith('rem') || str.endsWith('em')
            || str.endsWith('vh') || str.endsWith('vw') || str.endsWith('%')) {
            return str;
        }

        return '';
    }
};

export class StyleBuilder {
    constructor() {
        this.styles = '';
    }

    input(isValid) {
        return this.addStyle(INPUT_STYLES).addStyleIf(isValid, INPUT_VALID_STYLES).addStyleIf(!isValid, INPUT_INVALID_STYLES);
    }

    textarea() {
        return this.addStyle(TEXTAREA_STYLES);
    }

    select() {
        return this.addStyle(SELECT_STYLES);
    }

    selectButton() {
        return this.addStyle(SELECT_BUTTON_STYLES);
    }

    label() {
        return this.addStyle(LABEL_STYLES);
    }

    required() {
        return this.addStyle(REQUIRED_STYLES);
    }

    validationMessage() {
        return this.addStyle(VALITATION_MESSAGE_STYLES);
    }

    inputLabelGroup() {
        return this.addStyle(INPUT_LABEL_GROUP_STYLES);
    }

    textAlign(textAlign) {
        switch (textAlign) {
            case TextAlign.Left:
                return this.addStyle('text-left');
            case TextAlign.Center:
                return this.addStyle('text-center');
            case TextAlign.Right:
                return this.addStyle('text-right');
            case TextAlign.Justify:
                return this.addStyle('text-justify');
            case TextAlign.Start:
                return this.addStyle('text-start');
            case TextAlign.End:
                return this.addStyle('text-end');
            default:
                return this;
        }
    }

    button(buttonType) {
        switch (buttonType) {
            case ButtonType.Default:
                return this.addStyle(BUTTON_DEFAULT_STYLES);
            case ButtonType.Success:
                return this.addStyle(BUTTON_SUCCESS_STYLES);
            case ButtonType.Danger:
                return this.addStyle(BUTTON_DANGER_STYLES);
            default:
                return this.addStyle(BUTTON_NORMAL_STYLES);
        }
    }

    horizontalAlignment(alignment) {
        switch (alignment) {
            case HorizontalAlignment.Left:
                return this.addStyle('justify-start');
            case HorizontalAlignment.Center:
                return this.addStyle('justify-center');
            case HorizontalAlignment.Right:
                return this.addStyle('justify-end');
            default:
                return this;
        }
    }

    addStyle(style) {
        if (style && typeof style === 'string') {
            this.styles += ` ${style}`;
        }

        return this;
    }

    addStyleIf(condition, style) {
        if (condition) {
            this.addStyle(style);
        }

        return this;
    }

    build() {
        const result = this.styles.trim()
        this.styles = '';

        return result;
    }
}