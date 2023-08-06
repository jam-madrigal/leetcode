/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    // Time complexity O(n) space complexity O(1)
    // TODO: Write your code here
    // Initialize two pointers
    let left = 0;
    // We still have to loop through the entire array, so condition
    for (let right = 1; right < arr.length; right++) {
      // If the values at the left and right pointers do not match, set the next largest value after the current left value to the right pointer's value, increment the left to point to check for duplicates of this new value, repeat
      if (arr[right] !== arr[left]) {
        arr[left + 1] = arr[right];
        left++;
      }
    }
    // Return the length of the sorted array with duplicates ready to be removed, everything after this position
    return left+1;
};