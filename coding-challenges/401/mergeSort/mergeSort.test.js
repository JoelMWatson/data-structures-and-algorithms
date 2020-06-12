'use strict';

const mergeSort = require('./mergeSort');

describe('Testing mergeSort function', () => {
  // Reverse-sorted: [20,18,12,8,5,-2]
  test('should sort an array given in reverse-sorted order', () => {
    const sorted = mergeSort([20, 18, 12, 8, 5, -2]);
    expect(sorted).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  // Few uniques: [5,12,7,5,5,7]
  test('should sort an array given with few uniques', () => {
    const sorted = mergeSort([5, 12, 7, 5, 5, 7]);
    expect(sorted).toEqual([5, 5, 5, 7, 7, 12]);
  });

  // Nearly-sorted: [2,3,5,7,13,11]
  test('should sort an array given in nearly-sorted order', () => {
    const sorted = mergeSort([2, 3, 5, 7, 13, 11]);
    expect(sorted).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
