/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // TODO: Write your code here
    // recreate the string, regex to remove all non-alphanumeric characters
    s = s.replace(/[\W_]+/g,"").toLowerCase();
    // set to lowercase
    // instead of looping through two of the same string, two pointer and start from back and front
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    } 
    // Increment each one one by one and if they are ever not equal return false, otherwise return true
    // Stop the loop when they are at the same index
    return true;
};