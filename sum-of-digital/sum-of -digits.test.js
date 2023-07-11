/* eslint-disable import/no-unresolved */

// eslint-disable-next-line import/extensions
import { sumUpANumber } from './sum-of-digits ';

describe('Basic Tests', () => {
    it(' 16  ->  7', () => {
        expect(sumUpANumber(16)).toEqual(7);
    });
    it('942 -> 6', () => {
        expect(sumUpANumber(942)).toEqual(6);
    });
    it('132189 -> 6', () => {
        expect(sumUpANumber(132189)).toEqual(6);
    });
    it('493193 -> 2', () => {
        expect(sumUpANumber(493193)).toEqual(2);
    });
});
