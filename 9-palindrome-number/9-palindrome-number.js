/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // store x, our int, in a variable 
    // loop through the given integer backwards
    // push each index in this loop into a new variable
    // after having both variables, convert the new variable to a number, then if they are equal, return true, if not, return false
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