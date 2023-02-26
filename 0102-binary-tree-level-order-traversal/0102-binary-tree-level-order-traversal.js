/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  // If there is no root, just return an empty array, verifying the input...
  if(!root) return [];
  // Initialize the stacks to hold our result and currently processing nodes
  const result = [];
  const queue = [root];
  
  while(queue.length) {
    // Use breadth first search, most of the logic will be the same, but we have to add the part that considers making subarrays and checking our level in the tree
    // To know if we are at the end of a level in a tree, we can initialize a counter that checks the length of the queue and the current count which increments as each node gets processed in our queue
    // When the counter and the initial queue length line up, we know we've reached the end of a level
    // When the end of a level is reached... push the subarray into the results, re-initialize the subarray and count
        
    // When nodes of a given level are finished procesing, this executes again and reinitailizes our temporary holders for the level's values and the length which makes up our base case 
    const subArray = [];
    let length = queue.length
    let count = 0;
    // when the count is less than the initial length of the queue, shift the first value off, push any children to the queue, causing its children to become the new nodes in the queue, which also increases the length (recorded later to let us know how long the level is) and each time we process a node's children, we increment the count, then we check if the counter has become that length, which tells us if the end of the level is reached 

    while (count < length) {
      const currentNode = queue.shift();
      // Be careful of these pushes. Recognize that they are pushing into two separate arrays. One is just the queue, one is just the values
      // Place the value into our subarray, since that's what we need to return, ** oops called it value at first,  leetcode uses val
      subArray.push(currentNode.val);
      // If there are any children, push them into the queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
      // Increment the count, which, when all the nodes are processed on a given level, will break us out of this loop, since we took note of the length of the current level before starting this process; then repeats until the queue is empty which means we've processed every level
      count++;          
  }
    // When the while loop finishes taking the value from every node on the level, push it to the end results and being processing the next levels...
    result.push(subArray);
  }
  // All levels have been processed, return the result
  return result;
};