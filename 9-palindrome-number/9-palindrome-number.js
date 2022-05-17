/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // store x, our int, in a variable, convert it to a string so that we may loop through it
    // loop through the given integer backwards
    // push each index in this loop into a new variable, starting as an empty string
    // after having both variables, compare them, then if they are equal, return true, if not, return false
    // to validate, make sure they are the same length, and are integers, if they are not we know the result will be false and can return false
    
    // variables in which to store our results
    let intForwards = x.toString();
    let intBackwards = '';

    // Looping through the integer backwards, storing the result
    for (let i = intForwards.length  - 1; i > -1; i--) {
      intBackwards+= intForwards[i];
    }
    // Comparing forwards and backwards after converting backwards to a number, returning true if they are equal (a palindrome)
    
    if (intForwards === intBackwards) {
        return true;
    } else {
        return false;
    }
    
};
