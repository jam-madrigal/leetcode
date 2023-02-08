/**
 * @param {string} s
 * @return {boolean}
 */
const parens = {
    '(': ')',
    '{' : '}',
    '[': ']'
}

var isValid = function(s) {
    // Check if the string length is 0, return true
  if (s.length === 0) {
    return true;
  }
  // Create a stack, in this case an empty array
  const stack = [];
  // Check if the value is a right bracket while looping, and if it is, check the stack to see if the corresponding left bracket exists as the most recent item in the stack
  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      // Pop off the last value of the stack while also saving what it was in value to a variable, then compare that and what currently triggered our pop, if they do not match, return false 
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (correctBracket !== s[i]) {
        return false;
      }
    }
  }
    // If the stack is now empty, and we made it past all our checks, it means we don't have any lone brackets in the stack which would also be a false case, so we can return true
    return (stack.length === 0);
};