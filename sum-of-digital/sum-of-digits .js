/* eslint-disable indent */

'use strict';

/**
 * Sum of two numbers.
 *
 * @param {number} num1 - The first number to sum.
 * @param {number} num2 - The second number to sum.
 * @returns {number} - Sum of num1 and num2.
 */

export const sumUpANumber = (n) => {
    // eslint-disable-next-line no-mixed-operators
    return ((n - 1) % 9) + 1;
    // eslint-disable-next-line semi
};
