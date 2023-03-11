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
 * @return {number}
 */

const getTreeHeight = function(root) {
  // Getting the height is fairly simple. Initialize a value at 0 to hold the height, and since we know the tree structure for this problem will always have the final values starting from the left, just keep descending left and count the height
  let height = 0;
  
  while (root.left !== null) {
    root = root.left;
    height++
  }
  
  return height;
}

const nodeExists = function(idxToFind, height, node) {
  // Checking if a node exists is how we'll find the rightmost node of the bottom level of the tree, which we can use to calculate the total nodes. 
  // We know the last level can only have a maximum of the total of all the nodes of the previous level + 1, which we can calculate with the height, 2^height - 1 = all the previous nodes in total and the potential last indices, since arrays count from 0, 0-7 = 8 or 2(height) + 1
  // Using this, we can think of the last level as an array. It always starts at 0, and potentially has indices equivalent to the latter calculation, ie. a 4 level tree will have a last level that can be thought of as indices 0 - 7, potentially, making 8 total nodes
  // Essentially, binary search conditionally going down the tree, a maximum of {height} times, by finding the middle of the last level "array"
  // Initialize pointers to search the last level, and count how far we've gone so we know when to stop
  let left = 0,
  right = Math.pow(2, height) - 1,
  count = 0;
  // Search conditionally to the maximum depth to find if the potentially rightmost final level index exists
  while (count < height) {
    // First find the mid point, so we know which side to go down
    const midIndex = Math.ceil((left + right) / 2);

    if (idxToFind >= midIndex) {
      node = node.right;
      left = midIndex;
    } else {
      // Effectively starting binary search by reducing the size of our search range depending on where the node we're trying to find <must> exist
      node = node.left;
      // Do - 1 here, because imagine the bottom level of the tree, if we didn't, we would still be searching the right side we know can't include the target node
      right = midIndex - 1;
    }
    count++;
  }
  // Return if the node was found or not, returns true or false
  return node !== null;
}

const countNodes = function(root) {
  // Cover the bases... if no root, return 0, and if the height is also less than 1.. just return 1, given how the height counting functoin works, it won't increment the height value at all if there's only one node
  if (!root) return 0
  const height = getTreeHeight(root);
  if (height === 0) return 1;
  // Count the other nodes (the nodes above the last level) we will eventually add these to our total
  const otherNodes = Math.pow(2, height) - 1;
// Initialize the indices to search between, just like in the function that finds nodes
  let left = 0,
    right = otherNodes;
  // Binary search on the condition that the left and right pointers have not yet overlapped, meaning we've found the rightmost node
  while (left < right) {
    // Start searching at the mid point, and if it exists, reduce the size of the search area to the right of the tree since there could be more beyond it, if it doesn't exists, go to the left, since we've gone too far in that case, this will also update the value of our midpoint as the search continues since it is calculated from the left and right pointers
    const idxToFind = Math.ceil((left + right) / 2);
    if (nodeExists(idxToFind, height, root)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }
  // Calculate the total nodes by combining the upper nodes and the node count we have now determined to be at the bottom: it is equal to the rightmost value (left pointer) we found + 1, because we are looking at it as an array we have to add 1 since we want the full length, not the last index, as arrays start at 0
  return otherNodes + left + 1;
};