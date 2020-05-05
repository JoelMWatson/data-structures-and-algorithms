# Tree Implementation

## Links

- [Pull Request](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/#)
- [CI/CD](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/#/checks)

## Challenge

Create three classes, Node, BinaryTree and BinarySearchTree.

Node

- val - The value stored in the Node
- left - A pointer the left child Node in the tree
- right - A pointer to the right child Node in the tree

BinaryTree

- root - The Node that represents the root of the tree

* preOrder - A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order
* inOrder - A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
* postOrder - A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order

Binary Search Tree - This class may extend or inherit from the BinaryTree class.

- root - The Node that represents the root of the tree

* add - A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
* contains - A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not

Stretch Goal
An optional stretch goal for this lab assignment is to implement a class called KaryTree. Create a new branch called k-ary-tree, and, using the resources available to you online, implement a k-ary tree, where each node can have any number of children.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

preOrder() : O(n)
inOrder() : O(n)
postOrder() : O(n)

add() : O(log(n))
contains() : O(n)

## API

- preOrder() - A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order
- inOrder() - A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
- postOrder() - A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order
- add(val) - A function that takes in a value as a parameter, and then adds a new Node with that value in the correct locations of the binary search tree
- contains(val) - A function that takes in a value as a parameter, and returns true if that value is in the tree, and false if not

## Testing

`npm test`

- You can successfully instantiate an empty tree
- You can successfully instantiate a tree and add a single root node
- You can successfully add a left and right child to a single root node
- You can successfully do a preOrder traversal
- You can successfully do an inOrder traversal
- You can successfully do a postOrder traversal
- You can successfully add a value to a binary search tree
- You can search a binary search tree for a value and get the correct true/false result
