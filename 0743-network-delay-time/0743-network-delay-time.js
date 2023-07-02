/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
class PriorityQueues {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  peek() {
    return this._heap[0];
  }

  isEmpty() {
    return this._heap.length === 0;
  }

  _parent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  _compare(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  push(value) {
    this._heap.push(value);
    this._siftUp();

    return this.size();
  }

  _siftUp() {
    let nodeIdx = this.size() - 1;

    while (0 < nodeIdx && this._compare(nodeIdx, this._parent(nodeIdx))) {
      this._swap(nodeIdx, this._parent(nodeIdx));
      nodeIdx = this._parent(nodeIdx);
    }
  }

  pop() {
    if (this.size() > 1) {
      this._swap(0, this.size() - 1);
    }

    const poppedValue = this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let nodeIdx = 0;

    while (
      (this._leftChild(nodeIdx) < this.size() &&
        this._compare(this._leftChild(nodeIdx), nodeIdx)) ||
      (this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), nodeIdx))
    ) {
      const greaterChildIdx =
        this._rightChild(nodeIdx) < this.size() &&
        this._compare(this._rightChild(nodeIdx), this._leftChild(nodeIdx))
          ? this._rightChild(nodeIdx)
          : this._leftChild(nodeIdx);

      this._swap(greaterChildIdx, nodeIdx);
      nodeIdx = greaterChildIdx;
    }
  }
}

const networkDelayTime = function(times, N, k) {
  // First step is to make an array that can hold the distances, or time it takes to reach a node from the starting point
  const distances = new Array(N).fill(Infinity);
  // Then make an adjacency list for the necessary graph traversals
  const adjList = distances.map(() => []);
  // Lining up the distances array properly, making the first index actually be the distance from the starting node, since the list of nodes starts at 1
  distances[k - 1] = 0;
  // Initialize the priority queue, a min heap, what it will compare as it constructs itself will be the values in the distances array
  const heap = new PriorityQueues((a, b) => distances[a] < distances[b]);
  // Push the first distances value into the heap, since 1 is the first node we're given, but it's represented by index 0 in the distances array, subtract 1 to get it
  heap.push(k - 1);
  // Filling the data structures properly, the distances and adjacency list
  for (let i = 0; i < times.length; i++) {
    // Necessary information from the times array
    const source = times[i][0];
    const target = times[i][1];
    const weight = times[i][2];
    // Fill the adjaceny list with those values, remember to subtract 1 any time a node is referenced since it starts at 1 instead of 0 like our array
    adjList[source - 1].push([target - 1, weight]); 
  }
  // Organize the heap for as long as there are values in it, perform dijstrika's on the smallest weight value in the heap, it's a min queue so we can just use the pop method to get the smallest
  while (!heap.isEmpty()) {
    const currentVertex = heap.pop();
    // Get the values that vertex connects to
    const adjacent = adjList[currentVertex];
    // Now loop through all the connections, then compare the weight we can take from here to one of the connections to the possible weight to the same node we've found before
    for (let i = 0; i < adjacent.length; i++) {
      const neighboringVertex = adjacent[i][0];
      const weight = adjacent[i][1];
      // Compare the distance to this neighbor compared to previously known weights
      if (distances[currentVertex] + weight < distances[neighboringVertex]) {
        distances[neighboringVertex] = distances[currentVertex] + weight;
      // Push the value into the heap, and because of how the push method works, also put the lowest value back at the top to next be checked when popped off, this prevents having to loop through the distances value evey timer
        // As this goes on the distances array will become the minimum distances to each node from our starting point
        heap.push(neighboringVertex);
      }
    }
  }
  const ans = Math.max(...distances);
  // If the node was never reached return false, if not, return the max
  return ans === Infinity ? -1 : ans; 
};