/* eslint-disable no-undef */

import { convertToInteger } from './ roman-to-integer.js';

describe('Basic Tests', () => {
    it(' 1 + 2  ->  3', () => {
        expect(convertToInteger('III')).toEqual(3);
    });
    it('should return 3 when 8 is passed', () => {
        expect(convertToInteger('LVIII')).toEqual(58);
    });
    it('should return 4 when 11 is passed', () => {
        expect(sum('MCMXCIV')).toEqual(1994);
    });
});
