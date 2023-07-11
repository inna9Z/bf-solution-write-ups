/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
'use strict';

/**
 * Sum of two numbers.
 *
 * @param {number} num1 - The first number to sum.
 * @param {number} num2 - The second number to sum.
 * @returns {number} - Sum of num1 and num2.
 */

export const convertToInteger = (roman) => {
    const romanNumerals = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };

    let result = 0;
    let i = 0;

    while (i < roman.length) {
        if (roman[i] in romanNumerals) {
            if (
                i + 1 < roman.length &&
                roman[i] + roman[i + 1] in romanNumerals
            ) {
                result += romanNumerals[roman[i] + roman[i + 1]];
                i += 2;
            } else {
                result += romanNumerals[roman[i]];
                i += 1;
            }
        } else {
            return 'Invalid Roman numeral';
        }
    }

    return result;
};
const count = (num) => {
    let count1 = 0;
    while (num !== 0) {
        num = Math.floor(num / 10);
        ++count1;
    }
    return count1;
};
console.log(count(-314890));
