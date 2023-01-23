/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(heights) {
  // Variable to store water 
  let totalWater = 0;
  // Initialize pointers
  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
  // First, identify which pointer has the lesser value, it can also continue if equal
    if (heights[left] <= heights[right]) { 
  // Check if the value is greater than or equal to the current max value on that side
    // If true, update the max of that pointer's side
      if (heights[left] >= leftMax) {
        leftMax = heights[left];
      } else {
    // If false, get the water for this index and add it to the total
        totalWater+= leftMax - heights[left];
      }
  // Move pointer inwards, left side increments, right side decrements
        left++
      } else {
  // Repeat these steps for the opposite pointer
        if (heights[right] >= rightMax) {
          rightMax = heights[right];
        } else {
          totalWater+= rightMax - heights[right];
        }
          right--;
        }
    }
  return totalWater;
};