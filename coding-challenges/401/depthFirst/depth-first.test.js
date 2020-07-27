const Graph = require('../../../data-structures/graph/graph');
const depthFirst = require('./depth-first');

describe('testing depthFirst function', () => {
  test('', () => {});

  const graph = new Graph();
  graph.addNode('a'); // Root Node
  graph.addNode('b');
  graph.addNode('c');
  graph.addNode('d');
  graph.addNode('e');
  graph.addNode('f');
  graph.addNode('g');
  graph.addNode('h');

  // Build test graph (Bidirectional)
  graph.addEdge('a', 'b');
  graph.addEdge('b', 'a');
  graph.addEdge('b', 'c');
  graph.addEdge('c', 'b');
  graph.addEdge('c', 'g');
  graph.addEdge('g', 'c');
  graph.addEdge('b', 'd');
  graph.addEdge('d', 'b');
  graph.addEdge('a', 'd');
  graph.addEdge('d', 'a');
  graph.addEdge('d', 'f');
  graph.addEdge('f', 'd');
  graph.addEdge('f', 'h');
  graph.addEdge('h', 'f');
  graph.addEdge('h', 'd');
  graph.addEdge('d', 'h');
  graph.addEdge('d', 'e');
  graph.addEdge('e', 'd');
  // Output: A, B, C, G, D, E, H, F
  expect(depthFirst(graph, 'a')).toStrictEqual([
    'a',
    'd',
    'e',
    'h',
    'f',
    'b',
    'c',
    'g',
  ]);
});
