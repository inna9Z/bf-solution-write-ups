'use strict';

import { calcAge } from './age.js';

describe('Basic Tests', () => {
    it(' calculate the age', () => {
        expect(calcAge(10)).toEqual(3650);
    });
    it('should return 0', () => {
        expect(calcAge(0)).toEqual(0);
    });
    it('should return 26645 when 73is passed', () => {
        expect(calcAge(73)).toEqual(26645);
    });
});
