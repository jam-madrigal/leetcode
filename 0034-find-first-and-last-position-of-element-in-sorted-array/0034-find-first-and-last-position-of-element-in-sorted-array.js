/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function binarySearch(array, left, right, target) {
  // binary search works with a sorted array, by, unlike linear search which uses o(n) time, uses log(n)
  // It does this by first dividing the input in half, by taking the mid point between the first and last indexes (rounding down) and then determining if the current index is equal to the target or not
  // If it's higher than the target, it divides from the left again,  if not, from the right
  // It repeats this division as much as possible until it finds the target
  while (left <= right) {
    const mid = Math.floor((left+right) / 2);
    const foundVal = array[mid];
    if (foundVal === target) {
      return mid;
    } else if (target > foundVal) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1
}

const searchRange = function (nums, target) {
  // First, if the array is empty, just return -1
  if (nums.length < 1) return [-1, -1];
  // Now, the most intuitive solution would be to binary search to find a value equal to our target, then linearly search in both directions from that point to see where our target begins and ends, but we can optimize this by utilizing more instances of binary search within this function instead 
  // First, we find a starting point from which to perform further binary searches and update the true start and end points of the target
  const firstPosition = binarySearch(nums, 0, nums.length -1, target);
  // If the start point doesn't exist; if the target doesn't exist in the array; then return -1
  if (firstPosition === -1) return [-1, -1];
  // With our start point found, we can then binary search on both the left and right sides
  // There must also be a value that temporarily saves what is our current starting and end point so far, so we first initialize them as the starting point, then update it every time they find the target again (if they don't return -1)
  let endPoint = firstPosition,
      startPoint = firstPosition,
      tempLeft,
      tempRight;
  // While we have a starting position to go off of... start updating the currently assumed start points and continue binary searching to the left of our starting position, this will update our currently assumed target starting point until it no longer can, so we know we will have the true start point, walk it through to see
  while (startPoint !== -1) {
    tempLeft = startPoint;
    startPoint = binarySearch(nums, 0, startPoint - 1, target);
  }
  // After the temporary holder of our eventual true starting point finishes updating.. update our final starting point to that position
  startPoint = tempLeft;
  // Do the same to the right side to find the end point
  while (endPoint !== -1) {
    tempRight = endPoint;
    endPoint = binarySearch(nums, endPoint + 1, nums.length - 1, target);
  }
  endPoint = tempRight;

  // Return our true starting and end points now that they have been found
  return [startPoint, endPoint];
};