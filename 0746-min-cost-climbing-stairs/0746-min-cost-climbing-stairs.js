/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Less optimal solution
    // First start from the "finish line" of the cost array
    const n = cost.length;
    // Memoization, so we aren't calculating the same things repeatedly
    const dp = [];
    // Return the minimum of the indices 1 or 2 steps behind this finish line, as we can only reach the end point from either of these indices
    return Math.min(minCost(n-1, cost, dp), minCost(n-2, cost, dp))  
};

// Recursive function to calculate the min cost of every index. Takes in the current index and the array of weights (costs), and returns the minimum weight to reach index i
const minCost = function(i, cost, dp) {
    // Validation, as at these indicess, there are no steps before these indices
    if (i < 0) return 0;
    if (i === 0 || i === 1) return cost[i];
    // If we already calculated the cost of the current step, don't calculate it again
    if (dp[i] !== undefined) return dp[i]
    // Return the minimum cost to reach the current index by calculating the cost to reach the indices which can step up to this current index, and taking the minimum between them, same as we reframe what the cost to reach the finish line really is, remember the cost of the current index is included in this case, as we have to step up to it, and it has a weight, unlike the finish line
    dp[i] = cost[i] + Math.min(minCost(i-1, cost, dp), minCost(i-2, cost, dp)); 
    return dp[i];
}