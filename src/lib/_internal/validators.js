export const validator = {
    errorRequired: (required, target) => {
        if (required && target) {
            return !target.value || target.value === '';
        }

        return false;
    },
    errorPattern: (pattern, target) => {
        if (pattern && target) {
            const regex = new RegExp(pattern);
            return !regex.test(target.value);
        }
    
        return false;
    },
    errorMinLength: (minLength, target) => {
        if (minLength && minLength > 0 && target) {
            return target.value.length < minLength;
        }

        return false;
    },
};
