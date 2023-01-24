/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(a, b) {
    // brute force, loop through each array, pushing to a new string then popping off if the current character is a #
  // Initialize empty strings
  let one = [];
  let two = [];
  // return if they are equal or not
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "#") {
      one.pop();
    } else {
      one.push(a[i]);
    }
    
  }

  for (let i = 0; i < b.length; i++) {
    if (b[i] === "#") {
      two.pop();
    } else {
      two.push(b[i]);
    }
  }
    return(JSON.stringify(one) === JSON.stringify(two));  
};