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
var maxDepth = function(node, currentDepth) {
      // If there is no node, we can stop incrementing the count of the current depth and return the value so far
    // Left out of the solution I learned from... I discovered we have to verify that a currentDepth was actually properly declared, otherwise we get NaN
    if (!currentDepth) {
        currentDepth = 0;
    }
    if (node === null) {
      return currentDepth;
    }
    // If there is a node, obviously increase the current depth we've reached
    currentDepth++;
    // This is where it's tricky. What's happenning here is that, every time we have a node and increment the count, we then do that same check to the right and left below our current node in the tree, and we return the max of the results of that. Since it's recurisvely calling the same function, and it's doing this for every  node... if you walk through it visually by hand and see, this return does not end until it finishes going through every single node, and the value it finally gets from either side is how far the count is the maximum depth it reached, since it was checking that value the whole way through. It's not easy to come up with this, but it makes sense when you do see it. Since it's recursive, it can't actually have a result until it hits our base case of no longer having a node, at which point the currentDepth has been updated however many times it took to reach an empty node. By nature of depth, only the deepest one will be the remaining return value after everything else is traversed.
    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth));
};