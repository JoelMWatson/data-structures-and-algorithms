'use strict';

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val, this.top);
    this.top = node;
  }

  pop() {
    if (this.top) {
      const temp = this.top;
      this.top = this.top.next;
      return temp.val;
    }
    console.error('Empty Stack');
  }

  peek() {
    if (this.top) {
      return this.top.val;
    }
    console.error('Empty Stack');
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.front) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
  }

  dequeue() {
    if (this.front) {
      const temp = this.front;
      this.front = this.front.next;
      if (this.back === temp) this.back = null;
      return temp.val;
    }
    console.error('Empty Queue');
  }

  peek() {
    if (this.front) {
      return this.front.val;
    }
    console.error('Empty Queue');
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = {
  Node,
  Stack,
  Queue,
};
