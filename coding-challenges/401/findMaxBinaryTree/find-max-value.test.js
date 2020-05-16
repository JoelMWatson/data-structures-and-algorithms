'use strict';

// builds binary tree root node
const {
  buildLevels,
} = require('../../../data-structures/binaryTree/binaryTree');
const MaxBinaryTree = require('./find-max-value');

describe('Testing out breadthFirst', () => {
  test('works on empty tree', () => {
    const tree = new MaxBinaryTree();
    tree.root = buildLevels([]);
    const max = tree.findMaxValue();
    expect(max).toBeNull();
  });

  test('works on one node tree', () => {
    //      1
    //  null  null
    const tree = new MaxBinaryTree();
    tree.root = buildLevels([1]);
    const max = tree.findMaxValue();
    expect(max).toBe(1);
  });

  test('works on multi-level tree when max is far right', () => {
    //      1
    //   2     3
    // 4   5 6   7
    const tree = new MaxBinaryTree();
    tree.root = buildLevels([1, 2, 3, 4, 5, 6, 7]);
    const max = tree.findMaxValue();
    expect(max).toBe(7);
  });

  test('works on multi-level tree when max is far left', () => {
    //      1
    //   2     3
    // 7   5 6   4
    const tree = new MaxBinaryTree();
    tree.root = buildLevels([1, 2, 3, 7, 5, 6, 4]);
    const max = tree.findMaxValue();
    expect(max).toBe(7);
  });

  test('works on multi-level tree when max is in the middle', () => {
    //      1
    //   2     7
    // 4   5 6   3
    const tree = new MaxBinaryTree();
    tree.root = buildLevels([1, 2, 7, 4, 5, 6, 3]);
    const max = tree.findMaxValue();
    expect(max).toBe(7);
  });
});
