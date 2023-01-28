/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Optimal solution after research
        //function will take in a string
    // validate input, check if string is empty, only has 1 character, return 0 or 1 depending
    if (s.length <= 1) {
      return s.length;
    }
    //first create somewhere to store seen characters
    let seen = {};
    //create somewhere to store the current longest length of string
    let longestLength = 0;
    //use sliding window, right pointer increments ahead until it sees a character it has already seen before at an index equal to or after the left pointer's index
    let leftP = 0;
  
    for (let rightP = 0; rightP < s.length; rightP++) {
      // We will be using the current character a lot, so store it
      const currentChar = s[rightP];
      // We will also be checking if a character was seen before, so clean it up by storing it too
      const prevSeenChar = seen[currentChar];
      // If we have seen the character before, then we need to start a new substring, so we move the left pointer up and reset the index of the previously seen character in our map, and we have to add +1 to it, because if we are starting from the same previously seen character, because otherwise we would run into the same length again between these two same characters, even if we jump the left pointer.
      if (prevSeenChar >= leftP) {
        leftP = prevSeenChar + 1;
      }
      seen[currentChar] = rightP;
      // Update the longest length so far, by calculating the current substring length and picking the max between that and the existing recorded length. We have to add +1 because if not, we're counting the distance between the pointers, instead of the full length including the start/end point
      longestLength = Math.max(longestLength, rightP - leftP + 1);
    }
    return longestLength;
    
    
//    ORIGINAL IDEAS  //function will take in a string
//     // validate input, check if string is empty, only has 1 character, return 0 or 1 depending
//     if (s.length === 0) {
//         return 0;
//     }
//     if (s.length === 1) {
//         return 1;
//     }
//     //first create somewhere to store seen characters
//     let seen = {};
//     //create somewhere to store the current longest length of string
//     let longestLength = 0;
//     //use sliding window, right pointer increments ahead until it sees a character it has already seen before at an index equal to or after the left pointer's index
//     let pointer1 = 0;
//     let pointer2 = 0;
//     let currentLength = 0;
  
//     while (pointer2 !== s.length) {
//   // if the right pointer has not seen the character before, add it to the seen map with the index in which it was spotted
//       if (!seen[s[pointer2]]) {
//         seen[s[pointer2]] = pointer2;
//         currentLength++;
//         pointer2++;
//       } else {
//   // if the character has already been seen, and after the beginning of the current string, compare the length of the current "window" and update longestLength if needed, then move pointer1 to pointer2's current spot and continue the comparison, resetting the current substring length back to 0
//         if (seen[s[pointer2]] < pointer1) {
//           seen[s[pointer2]] = pointer2;
//           currentLength++;
//           pointer2++;
//         } else {
//         currentLength--;
//           longestLength = Math.max(longestLength, currentLength);
//           currentLength = 0;
//           pointer1 = pointer2;
//         }
//       }
//     }
//     return longestLength;
};