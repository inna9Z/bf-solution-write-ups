'use strict';

import { checkLeapYear } from './leap-year.js';

describe('Basic Tests', () => {
    it('should return true when the year is 2000', () => {
        expect(checkLeapYear(2000)).toEqual(true);
    });
    it('should return true ', () => {
        expect(checkLeapYear(2020)).toEqual(true);
    });
    it('should return 4 when 11 is passed', () => {
        expect(checkLeapYear(2021)).toEqual(false);
    });
});
