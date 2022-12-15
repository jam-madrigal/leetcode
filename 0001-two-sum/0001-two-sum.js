/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Improving on my previous solution by using a hashmap
    const map = new Map();
    // First, create a loop to go through the input and find calculate the needed target
    for (let i = 0; i < nums.length; i++) {
        const numNeeded = target - nums[i];
        // If the current value already exists in our map, return the index which needed the current value of i from the map, followed by the current index i
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            // Else, store the calculated target in a map, along with the index at which it exists
            map.set(numNeeded, i);
        }
    }
};

