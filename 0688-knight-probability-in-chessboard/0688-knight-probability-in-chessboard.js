/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
// All the directions a knight can move
const directions = [[-2, 1],
                    [-2, -1],
                    [-1, 2],
                    [1, 2],
                    [2, 1],
                    [2, -1],
                    [1, -2],
                    [-1, -2]  
]
// More optimal solution, with memoizing probabilities we have already calculated before
const knightProbability = function (n, k, r, c) {
    // Store another array which logs probabilities already calculated, it holds all the probabilities for a given step
    // We make it based on k+1, because we'll be using the step value to represent the index instead of starting at 0, and because it's going to be an array of arrays, with the first layer being each step, with another array representing the entire grid inside of it holding the probabilities calculated for that step... it's hard to imagine, yes
  const dp = new Array(k+1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(undefined)));
  // Begin the recursive solution...
  return recurse(n, k, r, c, dp);
}
// Recursive function
const recurse = function (n, k, r, c, dp) {
    // Check if the knight is still in bounds
    if (r < 0 || c < 0 || r >= n || c >= n) {
        return 0;
    }
    // Check if out of moves
    if (k === 0 ) {
        return 1;
    }
    // If the probability at this current position and step was already calculated.. just return that
    if (dp[k][r][c] !== undefined) return dp[k][r][c];
    // Calculations are the same as the less optimal solution below
    let res = 0;
    for (let i = 0; i < directions.length; i++) {
        const dir = directions[i];
        res+= recurse(n, k-1, r+dir[0], c+dir[1], dp) / 8;
    }
    dp[k][r][c] = res;
    return dp[k][r][c];
}


// // Recursive solution with no memoization, too slow, scales horribly exponentially
// const knightProbability = function (n, k, r, c) {
//   // Check if the knight is out of bounds or out of moves
//   if (r < 0 || r >= n || c < 0 || c >= n) {
//     // If already out of bounds
//     return 0;
//   }
//   if (k === 0) {
//     // 100% probability it stays in bounds
//     return 1;
//   }
//   // Variable in which to add the total probabilities and return the total
//   let res = 0;
//   // Loop through all the possible moves a knight can make at its given position and calculate the probability it will stay in bounds, add it to the response to track the total probability for k moves
//   for (let i = 0; i < directions.length; i++) {
//     // The current move being checked
//     const dir = directions[i];
//     // Continue calculating the probability after every move, until moves run out or we have ended up out of bounds, updating the positions with r and c and the directional values, with each recursive call it will go through the possible moves in every direction, for every possible landing point from this initial position 
//     // Dividing by 8 because it's just one possible move to be added to the response which represents the total probability
//     res+= knightProbability(n, k-1, r+dir[0], c+dir[1]) / 8;
//   }
//   return res;
// }

