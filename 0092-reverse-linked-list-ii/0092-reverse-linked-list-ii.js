/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
      // First, we have to save our starting position to use later when we re-attach the lists, we will update what it is as we travel through until we have to start reversing our list so we know where to attach it
  // Also must store the current node, this will also update as we perform other operations on the list
  // Also must store the current position, this will increment and tell us when to start and stop operating on the linked list
  let start = head;
  let currentNode = head;
  let currentPosition = 1;

  // First, we have to traverse the list until we reach our starting point for reversal, we have to declare the starting point first because otherwise the starting point won't be before the new linked list we need to attach, it would be the same as the tail 
  while (currentPosition < m) {
    start = currentNode;
    currentNode = currentNode.next;
    currentPosition++;
  }
  // Now we initailize a new list in which we will store our reversed list, and then attach it to the saved start point, we must also save the current tail, so that we know where to attach the rest of the list we saved in the current node, eventually this tail will have the then current node attached to it
  let newList = null;
  let tail = currentNode;
  // Then, we have to start reversing the list, writing it this way makes sure we are accounting for the start and end nodes of our reversal and everything in between
  while (currentPosition >= m && currentPosition <= n) {
    // First, we have to store the rest of the list before we separate the current node from it
    const next = currentNode.next;
    // Then, update the current node to point to the reversed list thus far
    currentNode.next = newList;
    // Update the newList, as we have started building the connections but not yet stored the new list of them anywhere
    newList = currentNode;
    // Then, continue down the list and repeat, updating our position as we go so we know where to end
    currentNode = next;
    currentPosition++;
  }

  // Update the starting point to connect it to our new list
  start.next = newList;
  // Update the tail to connect to the current node, as explained earlier, as that current node is now the remainder of the original object outside of what we had to reverse
  tail.next = currentNode;
  // If the start of the reversal is greater than 1, we can return the head now that everything has been reordered, if the start point was just at position 1... then we need to return the newList otherwise the head won't contain the full references, as the head is just the tail end and connects to null... if we always return the new list, then we won't properly return the full object as the new list was never saved with the head included, the head was just updated to reference it, so the head is now the new list itself in its entirety
  if (m > 1) {
    return head;
  } else {
    return newList;
  }
};