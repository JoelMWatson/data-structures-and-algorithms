'use strict';

const { Stack, Queue } = require('./stacks-and-queues');
const errorSpy = jest.spyOn(console, 'error');

describe('Testing push on stack', () => {
  test('Can successfully push onto a stack?', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.top.val).toBe('a');
  });

  test('Can successfully push multiple values onto a stack?', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.push('e');
    expect(stack.top.val).toBe('e');
  });
});

describe('Testing pop on stack', () => {
  test('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.pop()).toBe('a');
  });

  test('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.push('d');
    stack.push('e');
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('Fails to pop on empty stack', () => {
    errorSpy.mockClear();
    const stack = new Stack();
    stack.pop();
    expect(errorSpy).toHaveBeenCalled();
  });
});

describe('Testing peek on stack', () => {
  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('a');
    expect(stack.peek()).toBe('a');
  });

  test('Fails to peek on empty stack', () => {
    errorSpy.mockClear();
    const stack = new Stack();
    stack.peek();
    expect(errorSpy).toHaveBeenCalled();
  });
});

describe('Testing enqueue on queue', () => {
  test('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.front.val).toBe('a');
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.enqueue('e');
    expect(queue.front.val).toBe('a');
  });
});

describe('Testing dequeue on queue', () => {
  test('Can successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.dequeue()).toBe('a');
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.enqueue('d');
    queue.enqueue('e');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('Fails to dequeue on empty queue', () => {
    errorSpy.mockClear();
    const queue = new Queue();
    queue.dequeue();
    expect(errorSpy).toHaveBeenCalled();
  });
});

describe('Testing peek on queue', () => {
  test('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue('a');
    expect(queue.peek()).toBe('a');
  });

  test('Fails to peek on empty queue', () => {
    errorSpy.mockClear();
    const queue = new Queue();
    queue.peek();
    expect(errorSpy).toHaveBeenCalled();
  });
});
