/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(arr) {
        // TODO: Write your code here
    // Naive solution, squaring and sorting, time inefficient
    // O(N) time by using pointers and comparing and adding as we go
    // May have to account for duplicates, negatives
    let newArr = new Array(arr.length).fill(0);
    let arrPos = newArr.length - 1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      if (arr[left] * arr[left] === arr[right] * arr[right]) {
        newArr[arrPos] = arr[left] * arr[left];
        left++;
        arrPos--;
      }
      else if (arr[left] * arr[left] > arr[right] * arr[right]) {
        newArr[arrPos] = arr[left] * arr[left];
        left++;
        arrPos--;
      } else {
        if (arr[left] * arr[left] < arr[right] * arr[right]) {
          newArr[arrPos] = arr[right] * arr[right];
          right--;
          arrPos--;
        }
      }
    }
    return newArr;
};