'use strict';

const {
  Queue,
} = require('../../../data-structures/stacksAndQueues/stacks-and-queues');

const breadthFirst = (node, queue = new Queue(), list = []) => {
  if (node) {
    if (queue.isEmpty()) {
      list[list.length] = node.val;
    } else {
      list[list.length] = queue.dequeue().val;
    }
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
    if (queue.front) {
      breadthFirst(queue.front.val, queue, list);
    }
  }
  return list;
};

module.exports = breadthFirst;
