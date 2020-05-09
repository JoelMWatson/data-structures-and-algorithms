'use strict';

const { buildLevels, KaryTree } = require('./k-ary-tree.js');

describe('Testing K-ary Tree', () => {
  test('You can successfully instantiate an empty tree', () => {
    const tree = new KaryTree();
    expect(tree.isEmpty()).toBeTruthy();
  });

  test('You can successfully instantiate a tree and add a single root node', () => {
    const tree = new KaryTree();
    tree.root = buildLevels([1]);
    expect(tree.isEmpty()).toBeFalsy();
  });

  test('You can successfully add an array of childen to a single root node', () => {
    //                            1
    //      2             3               4               5
    const tree = new KaryTree();
    tree.root = buildLevels([1, 2, 3, 4, 5], 4);
    expect([
      tree.root.val,
      tree.root.children[0].val,
      tree.root.children[1].val,
      tree.root.children[2].val,
      tree.root.children[3].val,
    ]).toEqual([1, 2, 3, 4, 5]);
  });

  test('You can successfully do a recursive preOrder traversal', () => {
    //                            1
    //      2             3               4               5
    //  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21
    const tree = new KaryTree(4);
    tree.root = buildLevels(
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
      ],
      4,
    );
    expect(tree.preOrder()).toEqual([
      1,
      2,
      6,
      7,
      8,
      9,
      3,
      10,
      11,
      12,
      13,
      4,
      14,
      15,
      16,
      17,
      5,
      18,
      19,
      20,
      21,
    ]);
  });

  test('You can successfully do a recursive inOrder traversal', () => {
    //                            1
    //      2             3               4               5
    //  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21
    const tree = new KaryTree(4);
    tree.root = buildLevels(
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
      ],
      4,
    );
    expect(tree.inOrder()).toEqual([
      6,
      7,
      2,
      8,
      9,
      10,
      11,
      3,
      12,
      13,
      1,
      14,
      15,
      4,
      16,
      17,
      18,
      19,
      5,
      20,
      21,
    ]);
  });

  test('You can successfully do a recursive postOrder traversal', () => {
    //                            1
    //      2             3               4               5
    //  6  7  8  9  10  11  12  13  14  15  16  17  18  19  20  21
    const tree = new KaryTree(4);
    tree.root = buildLevels(
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
      ],
      4,
    );
    expect(tree.postOrder()).toEqual([
      2,
      6,
      7,
      8,
      9,
      3,
      10,
      11,
      12,
      13,
      4,
      14,
      15,
      16,
      17,
      5,
      18,
      19,
      20,
      21,
      1,
    ]);
  });
});
