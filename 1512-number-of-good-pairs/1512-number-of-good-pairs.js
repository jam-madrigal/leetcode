/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairCount = 0;
    // TODO: Write your code here
    // Brute force would be two for loops
    // Instead, use a hashmap, every time we find another of the same, increase the count of it by 1
    // At the same time, with each new pair, the amount of pairs is equal to the current pairs, + that current pairs for that number -1, because each number occurence before it can create a new pair with the newly found number occurence
    let map = {};
    for (let i = 0; i < nums.length; i++) {
      map[nums[i]] = (map[nums[i]] || 0) + 1;
      pairCount += map[nums[i]] - 1;
    }
    return pairCount;
};