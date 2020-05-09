'use strict';

class Node {
  constructor(value, children = []) {
    this.val = value;
    this.children = children;
  }
}

const buildLevels = (arr, k, root = null, i = 0) => {
  if (i < arr.length) {
    root = new Node(arr[i]);
    for (let j = 0; j < k; j++) {
      root.children[j] = buildLevels(arr, k, root.children[j], k * i + (j + 1));
    }
  }
  return root;
};

class KaryTree {
  constructor(k) {
    this.root = null;
    this.maxChildren = k;
  }

  isEmpty() {
    return this.root === null;
  }

  preOrder(node = this.root) {
    if (!node) return null;
    let order = [];
    order.push(node.val);
    for (let i = 0; i < this.maxChildren; i++) {
      if (node.children[i])
        order = order.concat(this.preOrder(node.children[i]));
    }
    return order;
  }

  inOrder(node = this.root) {
    if (!node) return null;
    let order = [];
    for (let i = 0; i < Math.floor(this.maxChildren / 2); i++) {
      if (node.children[i])
        order = order.concat(this.inOrder(node.children[i]));
    }
    order.push(node.val);
    for (let i = Math.floor(this.maxChildren / 2); i < this.maxChildren; i++) {
      if (node.children[i])
        order = order.concat(this.inOrder(node.children[i]));
    }
    return order;
  }

  postOrder(node = this.root) {
    if (!node) return null;
    let order = [];
    for (let i = 0; i < this.maxChildren; i++) {
      if (node.children[i])
        order = order.concat(this.preOrder(node.children[i]));
    }
    order.push(node.val);
    return order;
  }
}

module.exports = { buildLevels, KaryTree };
