const Graph = require('./graph');

describe('Testing Graph Behavior', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('Node can be successfully added to the graph', () => {
    graph.addNode('a');
    expect(graph.nodes).toStrictEqual(['a']);
    // should fail if node already exists
    expect(graph.addNode('a')).toBeNull();
  });

  test('An edge can be successfully added to the graph', () => {
    graph.addNode('a');
    graph.addNode('b');
    graph.addEdge('a', 'b');
    expect(graph.edges.a.length).toBe(1);
    graph.addEdge('a', 'c');
    // should fail if node doesnt exist in graph
    expect(graph.edges.a.length).toBe(1);
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');
    expect(graph.getNodes()).toStrictEqual(['a', 'b', 'c']);
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');
    graph.addEdge('a', 'b');
    graph.addEdge('a', 'c');
    expect(graph.getNeighbors('a')).toStrictEqual([
      { node: 'b', weight: 0 },
      { node: 'c', weight: 0 },
    ]);
  });
  // Neighbors are returned with the weight between nodes included tested above

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.addNode('a');
    graph.addNode('b');
    graph.addNode('c');
    graph.addNode('d');
    graph.addNode('e');
    graph.addNode('f');
    expect(graph.size()).toBe(6);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    graph.addNode('a');
    graph.addEdge('a', 'a');
    expect(graph.getNodes()).toStrictEqual(['a']);
    expect(graph.getNeighbors('a')).toStrictEqual([{ node: 'a', weight: 0 }]);
  });

  test('An empty graph properly returns null', () => {
    expect(graph.getNodes()).toBeNull();
  });
});
