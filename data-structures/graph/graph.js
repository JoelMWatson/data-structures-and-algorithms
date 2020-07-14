class Graph {
  constructor() {
    this.nodes = [];
    this.edges = {};
  }

  addNode(value) {
    // No duplicates for this implementation
    if (this.edges[value]) return null;
    this.nodes.push(value);
    this.edges[value] = [];
    return value;
  }

  addEdge(node1, node2, weight = 0) {
    // Check both nodes are already added to the graph
    if (!this.edges[node1] || !this.edges[node2]) return null;
    this.edges[node1].push({ node: node2, weight: weight });
  }

  getNodes() {
    return this.nodes.length ? this.nodes : null;
  }

  getNeighbors(node) {
    return this.edges[node];
  }

  size() {
    return this.nodes.length;
  }
}

module.exports = Graph;
