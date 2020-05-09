'use strict';

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  // brought from data structures over for tests
  preOrder(node = this.root) {
    if (!node) return null;
    let order = [];
    order.push(node.val);
    if (node.left) {
      order = order.concat(this.preOrder(node.left));
    }
    if (node.right) {
      order = order.concat(this.preOrder(node.right));
    }
    return order;
  }
}

// brought from data structures over for tests
const buildLevels = (arr, root = null, i = 0) => {
  if (i < arr.length) {
    root = new Node(arr[i]);
    // insert left child
    root.left = buildLevels(arr, root.left, 2 * i + 1);
    // insert right child
    root.right = buildLevels(arr, root.right, 2 * i + 2);
  }
  return root;
};

const fizzBuzzTree = (tree) => {
  const newTree = new Tree(fizzBuzzNode(tree.root));
  return newTree;
};

const fizzBuzzNode = (node) => {
  if (!node) return null;
  let newNode;
  if (node.val % 3 === 0 && node.val % 5 === 0) {
    newNode = new Node('FizzBuzz');
  } else if (node.val % 3 === 0) {
    newNode = new Node('Fizz');
  } else if (node.val % 5 === 0) {
    newNode = new Node('Buzz');
  } else {
    newNode = new Node(`${node.val}`);
  }
  if (node.left) {
    newNode.left = fizzBuzzNode(node.left);
  }
  if (node.right) {
    newNode.right = fizzBuzzNode(node.right);
  }
  return newNode;
};

module.exports = { Tree, buildLevels, fizzBuzzTree };
