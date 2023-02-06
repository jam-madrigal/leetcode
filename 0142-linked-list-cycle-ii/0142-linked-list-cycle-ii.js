/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head) return null;
  // Floyd's tortoise and hair solution, which saves us from using a set and improves space complexity
  // First, instantiate a tortoise and hair pointer, the latter moves twice as fast as the former
  let tortoise = head;
  let hare = head;
  // Create a loop that runs until a break condition, that being when our pointers meet, or the "hare" pointer points to null and we don't have a cycle
  while (true) {
    tortoise = tortoise.next;
    hare = hare.next;
    // If the hare value is null, or will become null, return null, as we do not have a cycle, otherwise let hare move ahead
    if (hare === null || hare.next === null) {
      return null;
    } else {
      hare = hare.next;
    }
    // If the tortoise and the hare match, breaks out of the while loop, as we now have the values we need, the head and the tortoise/hare value which we can use to find our starting point for the cycle  
    if (tortoise === hare) break;
  }
  // Find the start of the cycle by moving the point at which tortoise and hair met and the head until they line up.. why this works is kinda hard to imagine, but drawing examples and following the code shows it works... math stuff
  let p1 = head;
  let p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  
  return p2;
};