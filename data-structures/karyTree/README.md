# K-ary Tree Implementation

## Links

- [Pull Request](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/13)
- [CI/CD](https://github.com/JoelMWatson/data-structures-and-algorithms/pull/13/checks)

## Challenge

Stretch Goal
An optional stretch goal for this lab assignment is to implement a class called KaryTree. Create a new branch called k-ary-tree, and, using the resources available to you online, implement a k-ary tree, where each node can have any number of children.

## Approach & Efficiency

<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

preOrder() : O(n)
inOrder() : O(n)
postOrder() : O(n)

## API

- preOrder() - A function that traverses the tree using preOrder depth-first traversal, and returns an array containing all the values in the traversed order
- inOrder() - A function that traverses the tree using inOrder depth-first traversal, and returns an array containing all the values in the traversed order
- postOrder() - A function that traverses the tree using postOrder depth-first traversal, and returns an array containing all the values in the traversed order

## Testing

`npm test`

- You can successfully instantiate an empty tree
- You can successfully instantiate a tree and add a single root node
- You can successfully add an array of childen to a single root node
- You can successfully do a preOrder traversal
- You can successfully do an inOrder traversal
- You can successfully do a postOrder traversal
