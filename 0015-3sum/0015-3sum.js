/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(arr) {
    const triplets = [];
    // TODO: Write your code here
    // Sort the array
    arr = arr.sort((a, b) => a - b);
    // Loop through the array, skipping index if it's the same as the previous one
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) continue;
    // Use two pointers to to check every combo that adds up to the target that makes 0 with the current index
      let target = -arr[i];
      let left = i + 1;
      let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) { // found the triplet
      triplets.push([-target, arr[left], arr[right]]);
      left++;
      right--;
      while (left < right && arr[left] === arr[left - 1]) {
        left++; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right--; // skip same element to avoid duplicate triplets
      }
    } else if (target > currentSum) {
      left++; // we need a pair with a bigger sum
    } else {
      right--; // we need a pair with a smaller sum
    }
  }
    }
    return triplets;
};