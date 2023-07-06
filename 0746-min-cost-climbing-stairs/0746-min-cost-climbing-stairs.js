/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Bottom-up solution, saves some space by only counting up instead of down then back up
    // Utilize the same dynamic programming memoizatoin idea to save what's already been calculated
    const dp = [];
    const n = cost.length;
    // Starting from the bottom, calculate up the graph, saving the minimum steps you already found then using those values to do further calculations if they're already known
    for (let i = 0; i < n; i++) {
        // No reason to calculate the first two indices minimum cost as there is only one possibility
        if (i < 2) {
            dp[i] = cost[i];
        } else {
            // Calculates the minimum cost and stores it
            dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
        }
    }
    return Math.min(dp[n-1], dp[n-2]);
};

