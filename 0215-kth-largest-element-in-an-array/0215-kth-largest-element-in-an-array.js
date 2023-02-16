/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const swap = function (array, i, j) {
  // Make sure to save a reference to the current partitionIndex value, as we will swap it first and change it, but need to know to move it to where j originally was
  const temp = array[i];
  // Swap the values
  array[i] = array[j];
  array[j] = temp;
};

  // This is where the real sorting happens
const getPartition = function (nums, left, right) {
  // Now, we can set the pivot element, which starts from the end of the array we set
  const pivot = nums[right];
  // Then, set the partitionIndex which begins at the left, as we're going to move down the array, swap values, then increment this to find our eventual sorted position for the pivot
  let partitionIndex = left;
  // A loop to do what is outlined above, making our start and stop points the divided array so far
  for (let j = left; j < right; j++) {
    // If the current value is less than our pivot, call our swap function to move this current value to where the partition currently is, so that it ends up to the left of the pivot, as after this, we will swap the partition and the pivot. This makes more sense once you follow examples of it after the first initial left and right values.
    if (nums[j] <= pivot) {
      swap(nums, partitionIndex, j);
      // Then, increment the partition and continue the swapping
      partitionIndex++;
    }
  }
  // Once all those swaps finish, we know that the last thing to do is to move our pivot down to where the partition currently is and swap them, so that everything to the left of the pivot is now less than it, and everything to the right is now greater than it. You really have to follow this to see it work and make sense.
  swap(nums, partitionIndex, right)
// Finally, return the partitionIndex
  return partitionIndex;

};

const quickSort = function (nums, left, right) {
  // This function should only run while the left is less than the right, otherwise it's already sorted/only has one index
  if (left < right) {
    // First, the actual sorting happens in an external function, that's where we determine our pivot and sort, this function just calls that function and then uses the results to call itself again until it successfully divides and conquers the whole array
    const partitionIndex = getPartition(nums, left, right);
    // After getting the partitionIndex, which is essentially to where we end up moving our pivot, call the function again using that value
    // Calls the function again, but breaking apart the array into everything less than the pivot
    quickSort(nums, left, partitionIndex - 1);
    // Do the same for everything greater than the pivot, completing our division and further dividing and sorting, by the time this finishes, our array will have been sorted and everything returns back to the final step of the findKthLarget function
    quickSort(nums, partitionIndex + 1, right);
  }
};

// The function to solve our overall problem will have to be the start of a divide and conquer/quicksort approach
var findKthLargest = function (nums, k) {
  // First, it saves the index that we need to find in the end, which is the index k values from the end of our array
  const indexToFind = nums.length - k;
  // Then, we start the quicksorting, passing in the start and end points for our first division of the problem into sub problems, which always uses the beginning and end of the full array
  quickSort(nums, 0, nums.length - 1);
  // Once that recursion all finishes, we know the array has been sorted, so return it
  return nums[indexToFind];
};