'use strict'

const BinarySearch = require('./array-binary-search');

describe('Binary search should find inputs that exist in the array', () => {
    test('single element array', () => {
        let result = BinarySearch([5], 5);
        expect(result).toBe(0);
    })

    test('two element array', () => {
        let result = BinarySearch([9, 10], 9)
        expect(result).toBe(0);
    })

    test('three element array', () => {
        let result = BinarySearch([1, 2, 3], 3)
        expect(result).toBe(2);
    })

    test('100 element array', () => {
        let arr = [3];
        for (let i=1; i < 100; i++) {
            arr[i] = Math.ceil(Math.random() * 100000000);
        }
        let result = BinarySearch(arr, 3)
        expect(result).toBe(0);
    })

    test('10000 element array', () => {
        let arr = [3];
        for (let i=1; i < 10000; i++) {
            arr[i] = Math.ceil(Math.random() * 100000000);
        }
        let result = BinarySearch(arr, 3)
        expect(result).toBe(0);
    })

    test('100000 element array', () => {
        let arr = [3];
        for (let i=1; i < 100000; i++) {
            arr[i] = Math.ceil(Math.random() * 100000000);
        }
        let result = BinarySearch(arr, 3)
        expect(result).toBe(0);
    })
})

describe('BinarySearch should not find inputs that dont exist in the array', () => {
    test('empty array', () => {
        let result = BinarySearch([], 5);
        expect(result).toBe(-1);
    })

    test('non existent array element', () => {
        let result = BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 55)
        expect(result).toBe(-1);
    })
})