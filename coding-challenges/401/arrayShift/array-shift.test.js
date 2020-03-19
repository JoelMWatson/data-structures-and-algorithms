'use strict'

const insertShiftArray = require('./array-shift');

const input1 = [[2,4,6,8], 5];
const output1 = [2,4,5,6,8];
const input2 = [[4,8,15,23,42], 16];
const output2 = [4,8,15,16,23,42];

describe('Testing insertShiftArray', () => {
    test('testing input 1', () => {
        let result = insertShiftArray(input1[0], input1[1]);
        console.log(result, output1);
        expect(result).toEqual(output1);
    })

    test('testing input 2', () => {
        let result = insertShiftArray(input2[0], input2[1]);
        console.log(result, output2)
        expect(result).toEqual(output2);
    })
})