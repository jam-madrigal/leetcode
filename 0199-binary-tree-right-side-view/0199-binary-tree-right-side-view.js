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
// ** this can be optimized by removing the checks in the rightSideView function, and instead separating the DFS operations into its own function, which the rightSideView function then calls after initializing the values itself, that way we know we always have them and don't have to perform so many checks at scale
const rightSideView = (node, currentLevel, result) => {
  // The solution must take the current node, increment the level by 1, check if the current level is not yet filled, and if it isn't, push it to the results array
  // Once this is done, the function must then be passed on to the right nodes first, then the left nodes
  // If there is no node, just return null, also initialize the other parameters if they don't exist, and increment the level if it has been passed down
  if (!node) return [];
  const currentNode = node;
  if (!currentLevel) {
    currentLevel = 1;
  } else {
    currentLevel = currentLevel + 1;
  }
  if (!result) {
    result = [];
  }
  // If the current level is not filled, push it to our results
  if (currentLevel > result.length) {
    result.push(node.val);
  }
  // Repeat on the other sides, doing the right side first
  rightSideView(node.right, currentLevel, result);
  rightSideView(node.left, currentLevel, result);

  return result;
};