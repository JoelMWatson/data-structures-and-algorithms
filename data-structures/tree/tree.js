'use strict';

class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
  }
}

const build = (arr, root = null, i = 0) => {
  if (i < arr.length) {
    root = new Node(arr[i]);
    // insert left child
    root.left = build(arr, root.left, 2 * i + 1);
    // insert right child
    root.right = build(arr, root.right, 2 * i + 2);
  }
  return root;
};

class BinaryTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  preOrder(node = this.root, order = []) {
    if (!node) return [];
    order.push(node.val);
    if (node.left) {
      order.concat(this.preOrder(node.left, order));
    }
    if (node.right) {
      order.concat(this.preOrder(node.right, order));
    }
    return order;
  }

  iterativePreOrder() {
    // Root, Left, Right
    if (this.root === null) return null;
    let current = this.root;
    const stack = [];
    const order = [];
    stack.push(current);
    while (stack.length > 0) {
      current = stack.pop();
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
      order.push(current.val);
    }
    return order;
  }

  inOrder(node = this.root, order = []) {
    if (!node) return [];
    if (node.left) {
      order.concat(this.inOrder(node.left, order));
    }
    order.push(node.val);
    if (node.right) {
      order.concat(this.inOrder(node.right, order));
    }
    return order;
  }

  iterativeInOrder() {
    // Left, Root, Right
    if (this.root === null) return null;
    let current = this.root;
    const stack = [];
    const order = [];
    while (current || stack.length > 0) {
      // always move to far left when possible
      while (current !== null) {
        stack.push(current);
        current = current.left;
      }
      current = stack.pop();
      order.push(current.val);
      current = current.right;
    }
    return order;
  }

  postOrder(node = this.root, order = []) {
    if (!node) return [];
    if (node.left) {
      order.concat(this.postOrder(node.left, order));
    }
    if (node.right) {
      order.concat(this.postOrder(node.right, order));
    }
    order.push(node.val);
    return order;
  }

  iterativePostOrder() {
    // Left, Right, Root
    if (this.root === null) return null;
    let current = this.root;
    let prev = null;
    const stack = [];
    const order = [];
    while (current || stack.length > 0) {
      // always move to far left when possible
      if (current !== null) {
        stack.push(current);
        current = current.left;
      } else {
        current = stack.pop();
        // if right subtree is not yet traversed
        if (current.right === null || current.right === prev) {
          order.push(current.val);
          prev = current;
          current = null;
        } else {
          stack.push(current);
          current = current.right;
        }
      }
    }
    return order;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.__add(value, this.root);
    }
  }

  __add(value, node) {
    if (value < node.val) {
      if (node.left) {
        this.__add(value, node.left);
      } else {
        node.left = new Node(value);
      }
    } else {
      if (node.right) {
        this.__add(value, node.right);
      } else {
        node.right = new Node(value);
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    return this.__contains(value, this.root);
  }

  __contains(value, node) {
    if (value === node.val) {
      return true;
    } else if (value < node.val) {
      if (node.left) {
        return this.__contains(value, node.left);
      } else {
        return false;
      }
    } else {
      if (node.right) {
        return this.__contains(value, node.right);
      } else {
        return false;
      }
    }
  }
}

module.exports = { Node, build, BinaryTree, BinarySearchTree };
