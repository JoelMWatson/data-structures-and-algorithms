'use strict';

const getEdge = (routes, cities) => {
  let found = true;
  let cost = 0;
  if (!routes.getNeighbors(cities[0])) {
    return [false, 0];
  }
  for (let i = 0; i < cities.length - 1; i++) {
    let edges = routes.getNeighbors(cities[i]);
    found = false;
    for (let k = 0; k < edges.length; k++) {
      if (edges[k].end === cities[i + 1]) {
        cost += edges[k].weight;
        found = true;
      }
    }
    if (!found) {
      return [false, 0];
    }
  }
  return [found, cost];
};

module.exports = { getEdge };
