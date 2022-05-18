/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // remove duplicates in the passed in array
    // must not allocate memory to another array, use the existing in-place
    // length of the array will stay the same, but the first elements should not be empty and should have the result, what comes after doesn't matter
    console.log(nums);
    // Loop through the array, 
    for (let i = 0; i < nums.length; i++) {
        // comparing the following index to the starting index
        for (let j = i + 1; j < nums.length; j++) {
            // removing the value of the index if it is the same
            if (nums[i] === nums[j]) {
                nums.splice(j, 1);
                 // Reset position j, to start the comparison again in case there are multiple duplicates
                j--;
            } 
        }
    }
    // Return the array in ascending order with duplicates removed
    console.log(nums);
};