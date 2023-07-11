'use strict';

/**
 * Checks if a year is a leap year.
 *
 * @param {number} year - The year to check.
 * @returns {number} - return true if the year is a leap year or false otherwise;
 */

export const checkLeapYear = (year) => {
    return (
        (year % 4 === 0 && year % 100 !== 0) ||
        (year % 4 === 0 && year % 400 === 0)
    );
};
