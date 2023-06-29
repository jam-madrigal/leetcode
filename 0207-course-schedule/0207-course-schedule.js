/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function(n, prerequisites) {
  // Topological sort optimized solution
  // Make an inDegree array which says how many connections a given vertex has
  const inDegree = new Array(n).fill(0);
  // Also build out an adjacency list to keep track, can be built from inDegree since it requires some of the same stops, just replace the 0's with empty arrays
  const adjList = inDegree.map(() => []);
  // Loop through the pre-requisites and build the inDegree and adjList, every time a connection to a vertex is found, increase the inDegree value by 1, for the adjList push the connection to its respective index which represents the vertex to which it connects
  for (let i = 0; i < prerequisites.length; i++) {
    const pair = prerequisites[i];
    inDegree[pair[0]]++;

    adjList[pair[1]].push(pair[0]);
  }
  // To be more efficient, we can make another data structure that holds all the values so far that have an inDegree of 0, so we know which ones to pop off next, instead of looping through it every time to find which has 0. The inDegrees of 0 don't have any connections left, so we know they can be completed at this point
  const stack = [];
  // Loop through the inDegree length, find all the current values of 0, push them to the stack. Then, as we reduce other values, we can check if they're now 0 and then push them to the stack too as we go on using a while loop
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      stack.push(i);
    }
  }
  // Loop through the stack, popping from it, then checking with the adjacency list which vertexes that connection is connected to. Reduce the inDegree of those vertexes by 1, check if they are equal to 0, and if they are, push them to the stack
    // We know that if we get through every single connection and some vertexes still have connections, then there must be a cycle, so we can return false, otherwise return true. We can know this by checking if we touched every vertex based on the passed in n value, if the stack doesn't get pushed to as many times as there are n, then there must be a cycle and the courses must not be completeable 
  let count = 0;
  while (stack.length) {
    const current = stack.pop();
    count++;
    // Grab the adjacent array to the current vertex with an inDegree of 0 and loop through it
    const adjacent = adjList[current];
    for (let i = 0; i < adjacent.length; i++) {
      // If the current vertex connects to anything, decrement the inDegree of those connections by 1
      const next = adjacent[i];
      inDegree[next]--;
      // If the inDegree is now 0, push it to the stack to be processed
      if (inDegree[next] === 0) {
        stack.push(next);
      }
    }
  }
  // Now that everything is sorted, we can return if the courses can all be completed or not. We return true or falase based on the count value.
  return count === n;
}