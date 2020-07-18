const { Queue } = require('../stacksAndQueues/stacks-and-queues');

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

  addEdge(start, end, weight = 0) {
    // Check both nodes are already added to the graph
    if (!this.edges[start] || !this.edges[end]) return null;
    this.edges[start].push({ start, end, weight });
  }

  getNodes() {
    return this.nodes.length ? this.nodes : null;
  }

  getNeighbors(node) {
    return this.edges[node];
  }

  getAllNeighbors(node) {
    let allNeighbors = [this.edges[node]];
    this.nodes.forEach((element) => {
      if (node !== element) {
        let found = this.edges[element].findIndex((edge) => edge.end === node);
        if (found > -1) {
          allNeighbors.push(this.edges[element][found]);
        }
      }
    });
    return allNeighbors;
  }

  size() {
    return this.nodes.length;
  }

  breadthFirst(node) {
    const toVisit = new Queue();
    const visited = [];

    toVisit.enqueue(node);
    while (!toVisit.isEmpty()) {
      let current = toVisit.dequeue();
      let edges = this.getNeighbors(current);

      edges.forEach((edge) => {
        if (!visited.includes(edge.start)) toVisit.enqueue(edge.end);
      });
      if (!visited.includes(current)) visited.push(current);
    }

    return visited;
  }
}

module.exports = Graph;
