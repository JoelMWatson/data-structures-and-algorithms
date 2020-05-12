'use strict';

const {
  buildLevels,
} = require('../../../data-structures/binaryTree/binaryTree'); // builds binary tree root node
const breadthFirst = require('./breadth-first');

describe('Testing out breadthFirst', () => {
  test('works on empty tree', () => {
    const node = buildLevels([]);
    const bf = breadthFirst(node);
    expect(bf).toEqual([]);
  });

  test('works on one node tree', () => {
    //      1
    //  null  null
    const node = buildLevels([1]);
    const bf = breadthFirst(node);
    expect(bf).toEqual([1]);
  });

  test('works on multi-level tree', () => {
    //      1
    //   2     3
    // 4   5 6   7
    const node = buildLevels([1, 2, 3, 4, 5, 6, 7]);
    const bf = breadthFirst(node);
    expect(bf).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
