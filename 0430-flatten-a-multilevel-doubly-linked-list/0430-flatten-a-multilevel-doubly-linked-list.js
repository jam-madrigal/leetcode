/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
      // Verification of our input
  if (!head) return head;
  // First, set our current node to the head
  let currentNode = head;
  // While the current node is not null, start traversing the list
  while (currentNode !== null) {
    // Before traversing down the list again, check if there is a child node
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {   
      // Our currentNode value already has the values we will need to attach the child node to after flattening, as long as we do it in the correct order and don't lose references, so...
      // Establish a child node and start traversing it to find the tail, so we can merge, we don't need to merge anything but this current list to keep things simple and efficient
      // Establish our child as the tail, in case it never updates and to update it as we traverse the list
      let tail = currentNode.child;
      // Progress down the child list to find the tail, then merge the lists
      while (tail.next !== null) {
        tail = tail.next;
      } 
      tail.next = currentNode.next;
      // Check that our tail isn't the end of the newly merged list, and connect the ends if necessary
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      // Finish merging and delete the reference to the child, being careful of the order to nost lose references.. really helps to draw all this out step by step to make sense of it
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  // Return the merged list
  return head;
};