/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(heights) {
    // Optimized solution
    // We can use logic to figure out which pointer can change to increase the current max area, and by doing this we can bring down our O(n^2) solution to O(n), we can't use more memory to increase the speed this time, we can use a two shifting pointers technique, but with some adjustments, this time let's use a while loop
    // In our calculation of the height, it's actually only the lesser of the values that matters at times. By checking for this, we can loop through once and then see if a pointer has to move
    // Initialize the 3 values we will be using, pointers and the current max area
    let i = 0;
    let j = heights.length - 1;
    let currentMax = 0;
    // Instead of a for loop, use a while loop to go through the array from the first pointer
    while (i < j) {
        // Let's clean this up this time by storing height and width in variables, and avoid a messy conditional by using the max method
        const height = Math.min(heights[i], heights[j]);
        const width = j - i;
        const area = height * width;
        // Check if the next height or width would actually increase our currentMax
        // Can also use Math.max() for this, to keep with the above trend of using the min method
        if (area > currentMax) {
            currentMax = area;
        }
        // Increment the first pointer if it is lowest of the two pointers, otherwise decrease the second pointer
        if (heights[i] <= heights[j]) {
            i++;
        } else {
            j--;
        }
    }
    return currentMax;

    
//     Input is an array of integers
//     Output should be the maximum calculation using the values in the array, and the distance of the indices 
//     Brute force, calculate every single combo with two for loops
        
//     Store the current largest calculation in a variable, update it if a larger result is found, and return that value after all calculations have been done
//     Return 0 if the input is empty or only contains one value, so initialize it with 0
//     let currentMax = 0;
//         for (let i = 0; i < height.length; i++) {
//             for (let j = i + 1; j < height.length; j++) {
//                 // First, pick the minimum value between the two current values in our loops, then multiply that by the distance between the two indices
//                 let result = Math.min(height[i], height[j]) * (j - i);
//                 if (result > currentMax) {
//                     currentMax = result;
//                 }
//             }
//         }
//         return currentMax;
};

