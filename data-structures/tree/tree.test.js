'use strict';

const { build, BinaryTree, BinarySearchTree } = require('./tree');

describe('Testing Binary Search Tree', () => {
  test('You can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.isEmpty()).toBeTruthy();
  });

  test('You can successfully instantiate a tree and add a single root node', () => {
    const tree = new BinaryTree();
    tree.root = build([5]);
    expect(tree.isEmpty()).toBeFalsy();
  });

  test('You can successfully add a left and right child to a single root node', () => {
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10]);
    expect([tree.root.val, tree.root.left.val, tree.root.right.val]).toEqual([
      5,
      7,
      10,
    ]);
  });

  test('You can successfully do a recursive preOrder traversal', () => {
    //        5
    //     7    10
    //   8   3 6   2
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10, 8, 3, 6, 2]);
    expect(tree.preOrder()).toEqual([5, 7, 8, 3, 10, 6, 2]);
  });

  test('You can successfully do an iterative preOrder traversal', () => {
    //        5
    //     7    10
    //   8   3 6   2
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10, 8, 3, 6, 2]);
    expect(tree.iterativePreOrder()).toEqual([5, 7, 8, 3, 10, 6, 2]);
  });

  test('You can successfully do a recursive inOrder traversal', () => {
    //        5
    //     7    10
    //   8   3 6   2
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10, 8, 3, 6, 2]);
    expect(tree.inOrder()).toEqual([8, 7, 3, 5, 6, 10, 2]);
  });

  test('You can successfully do an iterative inOrder traversal', () => {
    //        5
    //     7    10
    //   8   3 6   2
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10, 8, 3, 6, 2]);
    expect(tree.iterativeInOrder()).toEqual([8, 7, 3, 5, 6, 10, 2]);
  });

  test('You can successfully do a recursive postOrder traversal', () => {
    //        5
    //     7    10
    //   8   3 6   2
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10, 8, 3, 6, 2]);
    expect(tree.postOrder()).toEqual([8, 3, 7, 6, 2, 10, 5]);
  });

  test('You can successfully do an iterative postOrder traversal', () => {
    //        5
    //     7    10
    //   8   3 6   2
    const tree = new BinaryTree();
    tree.root = build([5, 7, 10, 8, 3, 6, 2]);
    expect(tree.iterativePostOrder()).toEqual([8, 3, 7, 6, 2, 10, 5]);
  });
});

describe('Testing Binary Search Tree', () => {
  test('You can successfully instantiate an empty tree', () => {
    const bst = new BinarySearchTree();
    expect(bst.isEmpty()).toBeTruthy();
  });

  test('You can successfully add a value to a binary search tree', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    expect(bst.isEmpty()).toBeFalsy();
  });

  test('You can search a binary search tree for an existing value and get true', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    expect(bst.contains(5)).toBeTruthy();
  });

  test('You can search a binary search tree for an non existing value and get false', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(1);
    bst.add(10);
    bst.add(3);
    bst.add(7);
    bst.add(8);
    expect(bst.contains(7)).toBeFalsy();
  });
});
