# Stack and Queue Implementation

## Links

- [Pull Request](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/#)
- [CI/CD](https://github.com/JoelMWatson/data-structures-and-algorithms/runs/#)

## Challenge

Create three classes, Node and Stack, and Queue.

Node

Properties:

- val - The value stored in the Node
- next - A pointer the next Node in the list

Your Node class does not need to have any functions/methods, though you can add some if you have a use-case for it.

Stack

This object should be aware of a default empty value assigned to top when the stack is created.

Properties:

- Top - The Node that represents the top of the stack

Functions/methods:

- push() - A function that takes any value as an argument and adds a new node with that value to the top of the stack
- pop() - A function that does not take any argument, removes the node from the top of the stack, and returns the node’s value & should raise exception when called on empty stack
- peek() - A function that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack & should raise exception when called on empty stack
- isEmpty() - A function that takes no argument, and returns a boolean indicating whether or not the stack is empty.

Queue

Properties:

- Front - The Node that represents the end or exit of the queue
- Back - The Node that represents the beginning or entrance to the queue

Functions/methods:

- enqueue() - A function that takes any value as an argument and adds a new node with that value to the back of the queue
- dequeue() - A function that does not take any argument, removes the node from the front of the queue, and returns the node’s value & should raise exception when called on empty queue.
- peek() - A function that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue & should raise exception when called on empty queue
- isEmpty() - A function that takes no argument, and returns a boolean indicating whether or not the stack is empty.

## Approach & Efficiency

- push(): O(1)
- pop(): O(1)
- peek(): O(1)
- isEmpty(): O(1)

* enqueue(): O(1)
* dequeue(): O(1)
* peek(): O(1)
* isEmpty(): O(1)

## API

- push(value) - A function that takes any value as an argument and adds a new node with that value to the top of the stack
- pop() - A function that does not take any argument, removes the node from the top of the stack, and returns the node’s value & should raise exception when called on empty stack
- peek() - A function that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack & should raise exception when called on empty stack
- isEmpty() - A function that takes no argument, and returns a boolean indicating whether or not the stack is empty.

- enqueue(value) - A function that takes any value as an argument and adds a new node with that value to the back of the queue
- dequeue() - A function that does not take any argument, removes the node from the front of the queue, and returns the node’s value & should raise exception when called on empty queue.
- peek() - A function that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue & should raise exception when called on empty queue
- isEmpty() - A function that takes no argument, and returns a boolean indicating whether or not the stack is empty.

## Testing

npm test

## Whiteboarding

![whiteboard](https://drive.google.com/uc?export=view&id=1VdxewxW7hXQqaOBuze5zx6bi2L31_pic)
