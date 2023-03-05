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
 * @return {number[]}
 */
// DFS solution
// Optimized by separating functions
const dfs = (node, currentLevel, result) => {
  // The solution must take the current node, increment the level by 1, check if the current level is not yet filled, and if it isn't, push it to the results array
  // Once this is done, the function must then be passed on to the right nodes first, then the left nodes
  // If there is no node, just return null, also initialize the other parameters if they don't exist, and increment the level if it has been passed down
  currentLevel = currentLevel + 1;
  // If the current level is not filled, push it to our results
  if (currentLevel > result.length) {
    result.push(node.val);
  }
  // Repeat on the other sides, doing the right side first
  if (node.right) dfs(node.right, currentLevel, result);
  if (node.left) dfs(node.left, currentLevel, result);
};

const rightSideView = (node) => {
// This function simply initializes our values then starts the depth first search logic, it also checks if there is no node
  if (!node) return [];
  const result = [];
  dfs(node, 0, result);

  return result;
};