'use strict';

/**
 * Create a function that takes the age in years and returns the age in days
 * @param {number} age - the age
 * @returns {number} - the ege in days
 */

export const calcAge = (age) => {
    // eslint-disable-next-line no-restricted-globals
    if (typeof age !== 'number' || isNaN(age) || age < 0) {
        return 'Invalid age. Age must be a positive number.';
    }
    return age * 365;
};
