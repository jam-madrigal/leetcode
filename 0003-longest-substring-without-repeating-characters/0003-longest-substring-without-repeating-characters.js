/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //function will take in a string
    // validate input, check if string is empty, only has 1 character, return 0 or 1 depending
    if (s.length === 0) {
        return 0;
    }
    if (s.length === 1) {
        return 1;
    }
    //first create somewhere to store a string
    let string = [];
    //create somewhere to store the current longest length of string
    let longestLength = 0;
    //use two pointers in a while loop while pointer1 is less than length-1, one moves ahead while the other saves the starting point to make strings
    let pointer1 = 0;
    let pointer2 = pointer1;
    while (pointer1 !== s.length || pointer2 !== s.length) {
        //if the character is already included in the array, or if the end of the string (length - 1) is reached by pointer2, compare the length to the current longest length and update it if it is larger and increment pointer1 and clear the string, reset pointer2, otherwise, push s[pointer2], increment the second pointer and repeat this process 
        if (string.includes(s[pointer2]) || pointer2 === s.length) {
            if (string.length > longestLength) {
                longestLength = string.length;
            } 
                string = [];
                pointer1++;
                pointer2 = pointer1;
        } else {
                string.push(s[pointer2])
                pointer2++;
            }
    }
    return longestLength;
};