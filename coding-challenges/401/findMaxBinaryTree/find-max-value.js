'use strict';

const {
  BinaryTree,
  buildLevels,
} = require('../../../data-structures/binaryTree/binaryTree');

class MaxBinaryTree extends BinaryTree {
  findMaxValue(root = this.root, max) {
    if (!root) return null;
    if (!max) max = root.val;
    if (root.val > max) {
      max = root.val;
    }
    if (root.left) {
      max = this.findMaxValue(root.left, max);
    }
    if (root.right) {
      max = this.findMaxValue(root.right, max);
    }
    return max;
  }
}

module.exports = MaxBinaryTree;
