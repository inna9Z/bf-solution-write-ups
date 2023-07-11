'use strict';

import { count } from './solution-reverse-integer.js';

describe('Count an integer digits', () => {
    it('0 -> 1', () => {
        expect(count(0)).toEqual(1);
    });
    it('318 -> 3', () => {
        expect(count(318)).toEqual(3);
    });
    it(' 1234  ->  4', () => {
        expect(count(1234)).toEqual(4);
    });
    it(' 4666  ->  4', () => {
        expect(count(4666)).toEqual(4);
    });
    it(' -92563  ->  5', () => {
        expect(count(92563)).toEqual(5);
    });
    it('-123444 -> 6', () => {
        expect(count(-123444)).toEqual(6);
    });
    it('-314890 -> 6', () => {
        expect(count(-314890)).toEqual(6);
    });
    it('638476 -> 6', () => {
        expect(count(638476)).toEqual(6);
    });
    it('654321 -> 6', () => {
        expect(count(654321)).toEqual(6);
    });
});
