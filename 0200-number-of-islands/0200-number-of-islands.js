/**
 * @param {character[][]} grid
 * @return {number}
 */
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]


// Mistakes to look out for: accidentally set currentDir to the wrong index, used a const instead of let for numberOfIslands. Needed to break down why the for loop in the dfs function was necessary and did so below. Also had to check for strings instead of integers, because leetcode used strings...
const dfs = function (grid, currentRow, currentCol) {
  // First, ensure we are not out of bounds of the matrix
  if (currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) return;
  // Starting from our current place in the matrix, check if the value was a 1, and set it to 0 to ensure we don't count this island again throughout our dfs, then check every direction from our current place and call dfs, if it finds anything equal to 1, we know the indexes are connected and so we don't have to count them as a new island, so it sets them to 0 so the original loop continues and finds only new islands. Every time it finds another 1, it checks all the indexes that would just be an extension of that part of the island and sets them 0 if they aren't new islands.
  if (grid[currentRow][currentCol] === "1") {
    grid[currentRow][currentCol] = 0;

    for (let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      // These values will combine with our current row and colum when we call dfs recursively to change our placement
      const row = currentDir[0];
      const col = currentDir[1];
      dfs(grid, currentRow + row, currentCol + col);
    }
  }
}

const numIslands = function (grid) {
  // First verify input
  if (!grid.length) return 0;
  // Initialize the count of islands
  let islandCount = 0;
  // Start a loop that calls our dfs function once it determines an island
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        islandCount++;
        console.log(islandCount)
        dfs(grid, row, col);
      }
    }
  }
  return islandCount
}