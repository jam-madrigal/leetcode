/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(str) {
      // Consider out possibilities, and input and output, we are taking in a string, we will have to go through that string somehow and return the string with the minimum excess brackets removed, and it doesn't matter which ones, as long as they all are closing
  // A stack is ideal for this problem, because it essentially boils down to looping through the string, and determining whether or not to remove a bracket, and a stack is how we can track which brackets we will need to remove once we reach the end of the string, and pop any obvious excess brackets off as we go
  // Make use of the split method and the join method, this will be very clean for, after we determine which brackets are unresolved, we can simply set them to spaces by index, and then join the entire string back together, but passing in the separator as an empty string so there are no spaces or commas
  let input = str.split('');
  let stack = [];
  // Our possibilities are a left bracket, a right bracket, or a letter
  for (let i = 0; i < input.length; i++) {
  // If it's a left bracket, we can push the index of that to our stack
    if (input[i] === '(') {
      stack.push(i);
    } else if (input[i] === ')' && stack.length) {
  // If we find a right bracket and the stack is not empty, then it must correspond to our left bracket, so we can pop one bracket off the stack
      stack.pop();
    } else if (input[i] === ')') {
      // This else if must check if it's a right bracket, otherwise it will convert even our regular characters
  // If the stack of left brackets is not empty, we haven't seen a left bracket yet, and then we should set this right bracket equal to a space since we will have to remove right brackets that can't possibly close
      input[i] = "";
    }
  }
  // If our stack is not empty, then we systematiclaly empty it with the pop method and set all those popped indexes we saved equal to spaces in our string, then we return the join of our initial split string input
  while (stack.length) {
    const currentIndex = stack.pop();
    input[currentIndex] = "";
  }
  return input.join("");
};