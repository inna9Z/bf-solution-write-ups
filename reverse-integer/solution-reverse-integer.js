'use strict';

export const count = (num) => {
    if (!Number.isInteger(num)) {
        throw new Error('input not an integer num');
    }
    const digitCount = Math.abs(num).toString().length;
    return digitCount;
};
