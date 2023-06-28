/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(n, prerequisites) {
  // We make so many loops that way it starts fresh again if it reaches the end of one bfs, in some cases it might build the whole thing in one go, but every vertex/starting position has to be checked since the graphs can be unconnected, this makes it less efficient and a brute force solution...
  // First thing to do is make an adjacency list out of the list of prerequisites
  // Create an array then fill it with empty arrays, required for javascript
  const adjList = new Array(n).fill(0).map(() => []);
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    adjList[pair[1]].push(pair[0]);
  }
  // Then, using that adjacency list, run bfs on each possible starting point to see if there is ever a cycle, a cycle means the courses cannot be finished because some courses are pre-requisites for each other, making it impossible to do them all
  // v = vertex
  // Loop through the adjency list to keep track of every possible starting point
  for (v = 0; v < n; v++) {
    const queue = [];
    const seen = {};
    // Loop through the individual matrices in the adjacency list, keeping track of what nodes have been seen
    // return false if you reach the starting node
    // restart the checking from every possible starting point (topological search will make this more efficient)
    for (let i = 0; i < adjList[v].length; i++) {
      queue.push(adjList[v][i]);
    }
  // Now we can start actually checking for cycles
  while (queue.length) {
    current = queue.shift();    
    seen[current] = true;
    // v is the starting point, so if ever the queue we generated hits v again... we know it's a cycle
    if (current === v) return false;
    // Loop through all the connections for the currently queued vertex to continue making the queue
    const adjacent = adjList[current];
    for (let i = 0; i < adjacent.length; i++) {
      if (!seen[adjacent[i]]) {
        queue.push(adjacent[i]);
      }
    }
  }
}
  return true;
};