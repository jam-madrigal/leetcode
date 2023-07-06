/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // Bottom-up solution, saves some space by only counting up instead of down then back up
    // Utilize the same dynamic programming memoizatoin idea to save what's already been calculated
    const dp = [];
    const n = cost.length;
    // Further optimize by improving space by updating variables instead of storing every single minimum cost, since we never use them after calculating them until the very end
    let dpOne = cost[0];
    let dpTwo = cost[1];
    // Starting from the bottom, calculate up the graph, saving the minimum steps you already found then using those values to do further calculations if they're already known
    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(dpOne, dpTwo);
        // Only save the two most recent values, since we'll only need the last two in the end. If you think about the tree data structure, only these two previous values matter for calculating the next, as they are the two steps that can lead to it.
        dpOne = dpTwo;
        dpTwo = current;
    }
    return Math.min(dpOne, dpTwo);
};

