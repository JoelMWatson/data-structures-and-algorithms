# Linked List Implementation
    
## Links
- [Pull Request Lab 05](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/5)
- [CI/CD Lab 05](https://github.com/JoelMWatson/data-structures-and-algorithms/runs/544406714)
- [Pull Request CC 06](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/6)
- [CI/CD CC 06](https://github.com/JoelMWatson/data-structures-and-algorithms/runs/557137692)
    
## Challenge
Create two classes, Node and LinkedList.

Node

Properties:
- val - The value stored in the Node
- next - A pointer the next Node in the list
- prev - A pointer to the previous Node in the list (for use in stretch goal implementation)

Your Node class does not need to have any functions/methods, though you can add some if you have a use-case for it.

LinkedList

Properties:
- head - The Node that represents the beginning or start of the list
Functions/methods:
- insert() - A function that takes any value as an argument and adds a new Node with that value to the beginning of the list (before the current head
- includes() - A function that takes in a value as an argument and returns true or false if that value was found in the list
- toString() - A function that takes no arguments but prints out a visual representation of the Linked List, similar to the format: { a } -> { b } -> { c } -> NULL

Note that any errors in your LinkedList class and methods should be well handled and logged. Don’t default to the standard thrown error; instead use try catch blocks to correctly catch errors and log a user-friendly and descriptive message to the console.
Stretch Goal

An optional stretch goal for this lab assignment is to implement a class called DoublyLinkedList. This class should allow users to do all the same functionality of a LinkedList class, except this time each Node will have their next and prev pointers set. How would the insert(), includes() and toString() functions need to be altered to support this?

## Approach & Efficiency
- insert(): O(1)
- includes(): O(n)
- toString(): O(n)
- append(): O(n)
- insertBefore(): O(n)
- insertAfter(): O(n)

## API
- insert(value) - A function that takes any value as an argument and adds a new Node with that value to the beginning of the list (before the current head
- includes(value) - A function that takes in a value as an argument and returns true or false if that value was found in the list
- toString() - A function that takes no arguments but prints out a visual representation of the Linked List, similar to the format: { a } -> { b } -> { c } -> NULL
- append(value) which adds a new node with the given value to the end of the list
- insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node
- insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

## Testing
npm test

## Whiteboarding
![whiteboard](https://drive.google.com/uc?export=view&id=10xR2TTDhWaxE3h2dezCZtNDnYkHwoyQQ)