'use strict';

/**
 * Sum of two numbers.
 *
 * @param {number} num1 - The first number to sum.
 * @param {number} num2 - The second number to sum.
 * @returns {number} - Sum of num1 and num2.
 */

export const count = (num) => {
    if (!Number.isInteger(num)) {
        throw new Error('input not an integer num');
    }
    const digitCount = Math.abs(num).toString().length;
    return digitCount;
};
