'use strict';
const Graph = require('../../../data-structures/graph/graph');

const {
  Stack,
} = require('../../../data-structures/stacksAndQueues/stacks-and-queues');

const depthFirst = (graph, root) => {
  let stack = new Stack();
  let current = root;
  let visited = {};
  let results = [];
  let edges = [];

  if (current) {
    stack.push(current);
    results.push(current);
    visited[current] = true;

    while (!stack.isEmpty()) {
      current = stack.pop();
      edges = graph.getNeighbors(current);

      if (!visited[current]) {
        results.push(current);
        visited[current] = true;
      }

      for (let i = 0; i < edges.length; i++) {
        if (!visited[edges[i].end]) {
          stack.push(edges[i].end);
        }
      }
    }
  }

  return results;
};

module.exports = depthFirst;
