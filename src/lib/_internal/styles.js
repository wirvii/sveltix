import { ButtonType, HorizontalAlignment } from "./types.js";

const INPUT_STYLES = "block w-full text-sm px-2.5 pt-2 pb-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-0";
const LABEL_STYLES = "absolute left-1 top-2 font-light text-sm text-orange-400 bg-white px-1 pointer-events-none transform -translate-y-1/2";
const REQUIRED_STYLES = "text-red-500 font-thin";
const INPUT_LABEL_GROUP_STYLES = "relative pt-2";
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

    input() {
        return this.addStyle(INPUT_STYLES)
    }

    label() {
        return this.addStyle(LABEL_STYLES)
    }

    required() {
        return this.addStyle(REQUIRED_STYLES)
    }

    inputLabelGroup() {
        return this.addStyle(INPUT_LABEL_GROUP_STYLES)
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

    build() {
        return this.styles.trim();
    }
}