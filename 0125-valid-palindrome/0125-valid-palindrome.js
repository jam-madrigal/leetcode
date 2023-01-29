/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // Two pointers from center, can also move them from the ends, or compare against the reverse by making two new strings from either end, after replacing, and comparing, each has advantages depending on the situation...
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  // Find the center of the string
  center = s.length / 2;
  // Start the pointers at the same center point rounded down, Check if the length is even, and if it is, move the left pointer back by 1 so they are equidistant from the respective ends if it is indeed a palindrome
  let left = Math.floor(center);
  let right = left;
  if (s.length % 2 === 0) {
    left--;
  }
  // While the left pointer is greater than or equal to 0 (because it can reach 0 sooner than the right pointer reaches the end of the string) or the right pointer is not equal to the end, loop through and compare if the values are equal
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false 
    }
    left--;
    right++;
  }
  // return true if the while loop manages to reach the ends of the string
  return true;
};