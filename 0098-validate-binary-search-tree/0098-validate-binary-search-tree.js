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
 * @return {boolean}
 */
const dfs = function(node, min, max) {
  // The min and max will get updated depending on the directions we go in the tree
  // If checking to the left, then we have to update our maximum value, we know if we go left at all then the tree has been valid so far, but what the value cannot exceed changes as they get smaller as we go. The inverse is true of the right. Update the maximum when going left, update the minimum when going right.
  if (node.val <= min || node.val >= max) {
    return false;
  }
  
  if (node.left) {
    if (!dfs(node.left, min, node.val)) {
      return false;
    }
  }
  if (node.right) {
    if (!dfs(node.right, node.val, max)) {
      return false;
    }
  }
  return true;
}

const isValidBST = function(root) {
  // To start, validate the root node. An empty node is still valid in this case.
  if (!root) return true;
  // Pass the root value through to the next nodes, and being depth first searching
  return dfs(root, -Infinity, Infinity)
};
