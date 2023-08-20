/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(arr, targetSum) {
     // TODO: Write your code here
    // If array is less than 3 in length or nonexistent, return
    if (arr.length < 3 || arr === null) return;
    // Sort the array
    arr = arr.sort((a, b) => a - b);
    // Store the current closest and lowest sum, and it's difference
    let lowestClosestSum = Infinity;
    let currentClosestDifference = Infinity;
    // Use a for loop, then a while loop with two pointers inside, can do arr.length - 2 cause there won't be a possible triplet if it reaches that far
    for (let i = 0; i < arr.length - 2; i++) {
      // If the different is 0, we hit our target, so just return it
      let left = i + 1;
      let right = arr.length - 1;
      while (left < right) {
        // Store the difference between currentSum and targetSum
        let currentSum = arr[i]  +  arr[left] + arr[right];
        let currentDifference = currentSum - targetSum;
        // Return the sum if we have a difference of 0, since we hit the target exactly
        if (currentDifference === 0) return currentSum;
        // Check if the absolute value of that difference is lower than currentLowest difference
        // Save the value if it is
        if (Math.abs(currentDifference) < Math.abs(currentClosestDifference)) {
          lowestClosestSum = currentSum;
          currentClosestDifference = currentDifference;
        } 
        // If it's the same, return the sum that has the greater value, so compare without the absolute value
        // A lower sum with the same distance will have a negative value, so keep that one
        // Only change it if the absolute value of the difference is equal AND the non-absolute value of the currentSum is lower
        if (Math.abs(currentDifference) === Math.abs(currentClosestDifference) && currentSum < lowestClosestSum) {
          lowestClosestSum = currentSum;
        }
        // You know the sum is lower than the target and must increase if negative value
        // Vice versa
        // Decrease right pointer to decrease sum, increment left to increase sum
        if (currentSum < targetSum) {
          left++;
        } else {
          right--;
        }
      }
    }
    return lowestClosestSum;
  };