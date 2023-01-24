/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(a, b) {
  // Use two pointers, more efficient solution which improves space complexity
  // Start from the end of each string
  // If the current character is a #, decrement the corresponding pointer by 2
  // If at any point the characters do not match after this process, return false, else return true
  let aPointer = a.length - 1;
  let bPointer = b.length - 1;
    while (aPointer >= 0 || bPointer >= 0) {
    // This part was tricky. You have to store the accumulation of # in variables to get an accurate decrement, while also checking if what you decremented to is another hash and should increase the backcount further. 
     if (a[aPointer] === "#" || b[bPointer] === "#") {
            if(a[aPointer] === "#") {
                let decrement = 2;
                
                while(decrement > 0) {
                    aPointer--;
                    decrement--;
                    
                    if(a[aPointer] === "#") {
                        decrement += 2;
                    }
                }
            }
            
            if(b[bPointer] === "#") {
                let decrement = 2;
                
                while(decrement > 0) {
                    bPointer--;
                    decrement--;
                    
                    if(b[bPointer] === "#") {
                        decrement += 2;
                    }
                }
            }
     } 
         
      if (a[aPointer] !== b[bPointer]) {
          return false
      } else {
        aPointer--;
        bPointer--;
      }
    }
  return true; 
};