/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // receive an array as nums
    // receive a target integer
    // return the two indices that have a sum of the target
    // run two for loops, one being the starting index i, then the next looking for the needed number to add to that starting index throughout the whole array, j which will equal i + 1
    // If we do not find the needed combo, increase the starting index by one, and loop again until it is found
    // return an array with the i and j
    // bit of a brute force method, also add validation later to check that we are receiving an array of numbers and a target that is an integer, and that neither are null or undefined so use, and return a message if we reach the end of the array and don't have a solution
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return ([i, j]);
            }
        }
    }
};