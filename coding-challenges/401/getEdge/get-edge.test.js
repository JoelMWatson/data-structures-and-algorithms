const Graph = require('../../../data-structures/graph/graph');
const { getEdge } = require('./get-edge');

let graph;

beforeEach(() => {
  // Build test graph (Bidirectional)
  graph = new Graph();
  graph.addNode('a');
  graph.addNode('b');
  graph.addNode('c');
  graph.addNode('d');
  graph.addNode('e');
  graph.addNode('f');

  graph.addEdge('a', 'b', 15);
  graph.addEdge('b', 'a', 15);

  graph.addEdge('b', 'c', 25);
  graph.addEdge('c', 'b', 25);

  graph.addEdge('c', 'd', 30);
  graph.addEdge('d', 'c', 30);

  graph.addEdge('d', 'e', 40);
  graph.addEdge('e', 'd', 40);

  graph.addEdge('e', 'f', 20);
  graph.addEdge('f', 'e', 20);

  graph.addEdge('f', 'a', 10);
  graph.addEdge('a', 'f', 10);

  graph.addEdge('a', 'e', 5);
  graph.addEdge('e', 'a', 5);

  graph.addEdge('f', 'c', 35);
  graph.addEdge('c', 'f', 35);
});

describe('Testing get-edge function', () => {
  test('should find correct cost for true path', () => {
    const list = ['a', 'b', 'c'];
    const [possible, cost] = getEdge(graph, list);
    expect(possible).toBeTruthy();
    expect(cost).toBe(40);
  });

  test('should find a cost of zero for false path', () => {
    const list = ['a', 'f', 'd'];
    const [possible, cost] = getEdge(graph, list);
    expect(possible).toBeFalsy();
    expect(cost).toBe(0);
  });
});
