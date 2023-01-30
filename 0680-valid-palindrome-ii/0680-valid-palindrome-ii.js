/**
 * @param {string} s
 * @return {boolean}
 */
// For this problem, we need a second function that can verify if something is an almost palindrome by taking in the indexes which conflict, it will use the same logic as our main function to compare strings with two pointers beginning from start and end. If we got to the point of conflicts, we only need to worry about the strings after these points
const isValidSubPalindrome = function(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

var validPalindrome = function(s) {
  // Two points, one from each end, let's just make two new strings this time
  // regex to normalize the string
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  // Use two pointers, starting from the beginning and end, and compare
  // If the pointers are not currently intersecting, a while loop will run and compare the values, if they are not equal, it will pass two possible valid subpalindromes into our new function, skipping each potential conflicting index confirming whether or not we have an almost palindrome
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isValidSubPalindrome(s, left + 1, right) || isValidSubPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  // If nothing conflicts, return true
  return true;
};