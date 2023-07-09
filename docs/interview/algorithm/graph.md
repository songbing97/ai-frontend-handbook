# Graph Algorithms

## Implement breadth-first search (BFS) and depth-first search (DFS) on a graph by JavaScript.
To implement breadth-first search (BFS) and depth-first search (DFS) on a graph using JavaScript, you can use an adjacency list to represent the graph and apply the respective algorithms. Here's an example implementation:

```javascript
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList.get(vertex1).push(vertex2);
    this.adjacencyList.get(vertex2).push(vertex1);
  }

  bfs(startVertex) {
    const visited = new Set();
    const queue = [startVertex];
    const result = [];

    visited.add(startVertex);

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      const adjacentVertices = this.adjacencyList.get(currentVertex);

      for (let neighbor of adjacentVertices) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  dfs(startVertex) {
    const visited = new Set();
    const result = [];

    this.dfsHelper(startVertex, visited, result);

    return result;
  }

  dfsHelper(vertex, visited, result) {
    visited.add(vertex);
    result.push(vertex);

    const adjacentVertices = this.adjacencyList.get(vertex);

    for (let neighbor of adjacentVertices) {
      if (!visited.has(neighbor)) {
        this.dfsHelper(neighbor, visited, result);
      }
    }
  }
}

// Example usage:
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E', 'F']
console.log(graph.dfs('A')); // Output: ['A', 'B', 'D', 'E', 'C', 'F']
```

In this example, a `Graph` class is defined to represent the graph. It has methods to add vertices, add edges, perform BFS, and perform DFS.

The `addVertex` method adds a vertex to the graph by initializing an empty array as the adjacency list for that vertex.

The `addEdge` method adds an edge between two vertices by adding each vertex to the other's adjacency list.

The `bfs` method performs breadth-first search on the graph starting from the specified `startVertex`. It uses a `visited` set to keep track of visited vertices and a `queue` to process vertices in a FIFO manner. The result is an array of vertices visited in BFS order.

The `dfs` method performs depth-first search on the graph starting from the specified `startVertex`. It uses a `visited` set to keep track of visited vertices and a `result` array to store the vertices visited in DFS order. It calls the `dfsHelper` method to recursively visit vertices.

The `dfsHelper` method is a recursive helper function for DFS. It visits the current vertex, adds it to the `visited` set, and appends it to the `result` array. It then recursively calls itself on unvisited neighbors.

In the example usage, a graph is created with vertices A, B, C, D, E, and F, and edges are added between them. BFS and DFS are performed starting from vertex A, and the results are printed to the console.

You can test the BFS and DFS algorithms with different graphs by using the `Graph` class and its methods.

## Find the shortest path between two nodes in a graph using Dijkstra's algorithm by JavaScript.
To find the shortest path between two nodes in a graph using Dijkstra's algorithm in JavaScript, you can use the following implementation:

```javascript
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2, weight) {
    this.nodes.get(node1).push({ node: node2, weight });
    this.nodes.get(node2).push({ node: node1, weight });
  }

  dijkstra(startNode, endNode) {
    const distances = new Map();
    const previous = new Map();
    const queue = [];

    this.nodes.forEach((_, node) => {
      distances.set(node, Infinity);
      previous.set(node, null);
      queue.push(node);
    });

    distances.set(startNode, 0);

    while (queue.length) {
      const current = this.getMinimumDistanceNode(queue, distances);
      queue.splice(queue.indexOf(current), 1);

      if (current === endNode) {
        return this.getPath(previous, current);
      }

      this.nodes.get(current).forEach((neighbor) => {
        const distance = distances.get(current) + neighbor.weight;

        if (distance < distances.get(neighbor.node)) {
          distances.set(neighbor.node, distance);
          previous.set(neighbor.node, current);
        }
      });
    }

    return null;
  }

  getMinimumDistanceNode(nodes, distances) {
    let minDistance = Infinity;
    let minNode = null;

    nodes.forEach((node) => {
      if (distances.get(node) < minDistance) {
        minDistance = distances.get(node);
        minNode = node;
      }
    });

    return minNode;
  }

  getPath(previous, current) {
    const path = [];
    while (current) {
      path.unshift(current);
      current = previous.get(current);
    }
    return path;
  }
}

// Example usage:
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'E', 1);
graph.addEdge('D', 'E', 3);

const startNode = 'A';
const endNode = 'D';

const shortestPath = graph.dijkstra(startNode, endNode);
console.log(shortestPath); // Output: ['A', 'C', 'D']
```

In this example, a `Graph` class is defined to represent the graph. It has methods to add nodes, add edges with weights, and perform Dijkstra's algorithm to find the shortest path.

The `addNode` method adds a node to the graph by initializing an empty array in the adjacency list for that node.

The `addEdge` method adds an edge between two nodes with a specified weight by adding each node to the other's adjacency list.

The `dijkstra` method performs Dijkstra's algorithm to find the shortest path between the `startNode` and `endNode`. It initializes distances and previous nodes maps for each node, sets the initial distance of the `startNode` to 0, and then iteratively updates distances and previous nodes until all nodes are visited.

The `getMinimumDistanceNode` method returns the node with the minimum distance among a set of nodes.

The `getPath` method constructs the shortest path given the previous nodes map and the `endNode`.

In the example usage, a graph is created with nodes A, B, C, D, and E, and edges with weights are added between them. Dijkstra's algorithm is then performed to find the shortest path between the `startNode` and `endNode`, and the result is printed to the console.

You can test the Dijkstra's algorithm with different graphs by using the `Graph` class and its methods.

## Detect if a graph is cyclic using depth-first search by JavaScript.
To detect if a graph is cyclic using depth-first search (DFS) in JavaScript, you can use the following implementation:

```javascript
class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(node1, node2) {
    this.nodes.get(node1).push(node2);
    this.nodes.get(node2).push(node1);
  }

  isCyclic() {
    const visited = new Set();
    for (let node of this.nodes.keys()) {
      if (!visited.has(node) && this.isCyclicHelper(node, visited, null)) {
        return true;
      }
    }
    return false;
  }

  isCyclicHelper(node, visited, parent) {
    visited.add(node);

    const neighbors = this.nodes.get(node);

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        if (this.isCyclicHelper(neighbor, visited, node)) {
          return true;
        }
      } else if (neighbor !== parent) {
        return true;
      }
    }

    return false;
  }
}

// Example usage:
const graph = new Graph();

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

console.log(graph.isCyclic()); // Output: true
```

In this example, a `Graph` class is defined to represent the graph. It has methods to add nodes, add edges, and detect if the graph is cyclic.

The `addNode` method adds a node to the graph by initializing an empty array as the adjacency list for that node.

The `addEdge` method adds an edge between two nodes by adding each node to the other's adjacency list.

The `isCyclic` method is the main function that checks if the graph is cyclic. It iterates through all the nodes and performs a DFS starting from each unvisited node. If the DFS returns true for any node, it means a cycle exists in the graph, and the method returns true. Otherwise, it returns false.

The `isCyclicHelper` is a recursive helper function that performs DFS. It marks the current node as visited and then recursively visits all its neighbors. If a neighbor is visited but not the parent node, it indicates a back edge and a cycle in the graph.

In the example usage, a graph is created with nodes A, B, C, and D, and edges are added between them to form a cyclic graph. The `isCyclic` method is called to check if the graph is cyclic, and the result is printed to the console.

You can test the cyclic detection on different graphs by using the `Graph` class and its methods.
