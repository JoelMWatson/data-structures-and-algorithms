'use strict';

const multiBracketValidation = require('./multi-bracket-validation');

describe('Successfull Inputs', () => {
  test('ballanced input with just brackets', () => {
    const input = '{{(([[]]))}}';
    expect(multiBracketValidation(input)).toBe(true);
  });

  test('ballanced input with text and brackets', () => {
    const input = '{apple{butter(([[cake]]other))bacon}}nothing';
    expect(multiBracketValidation(input)).toBe(true);
  });
});

describe('Failure Inputs', () => {
  test('imbalanced input with just brackets', () => {
    const input = '{{(([[]]))}';
    expect(multiBracketValidation(input)).toBe(false);
  });

  test('imbalanced input with text and brackets', () => {
    const input = 'apple{butter(([[cake]]other))bacon}}nothing';
    expect(multiBracketValidation(input)).toBe(false);
  });
});
