'use strict';

const { Tree, buildLevels, fizzBuzzTree } = require('./fizz-buzz-tree');

describe('testing fizzbuzztree function', () => {
  test('should return an empty tree if given an empty tree', () => {
    const tree = new Tree();
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root).toBeNull();
  });

  test('should return same tree with all string numbers if none fizzbuzz', () => {
    const tree = new Tree(buildLevels([8, 4, 7, 2]));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.preOrder()).toEqual(['8', '4', '2', '7']);
  });

  test('should not mutate the original tree', () => {
    const tree = new Tree(buildLevels([15, 8, 5, 6, 4, 10, 3]));
    const newTree = fizzBuzzTree(tree);
    expect(tree.preOrder()).toEqual([15, 8, 6, 4, 5, 10, 3]);
  });

  test('should return properly fizzbuzzed tree', () => {
    const tree = new Tree(buildLevels([15, 8, 5, 6, 4, 10, 3]));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.preOrder()).toEqual([
      'FizzBuzz',
      '8',
      'Fizz',
      '4',
      'Buzz',
      'Buzz',
      'Fizz',
    ]);
  });
});
