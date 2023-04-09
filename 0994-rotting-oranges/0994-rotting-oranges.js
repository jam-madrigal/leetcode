/**
 * @param {number[][]} grid
 * @return {number}
 */
// Solution I copied, my solution is below but needs a debug.. logic is right there
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
]

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;


const orangesRotting = function(matrix) {
  if(matrix.length === 0) return 0;

  const queue = [];  
  let freshOranges = 0;
  
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if(matrix[row][col] === ROTTEN) {
        queue.push([row, col])
      }
      
      if(matrix[row][col] === FRESH) {
        freshOranges++;
      }
    }
  }
    
  let minutes = 0;
  let currentQueueSize = queue.length;
  
  while(queue.length > 0) {
    if(currentQueueSize === 0) {
      currentQueueSize = queue.length;
      minutes++;
    }

    const currentOrange = queue.shift();
    currentQueueSize--;
    const row = currentOrange[0];
    const col = currentOrange[1];
    
    for(let i = 0; i < directions.length; i++) {
      const currentDir = directions[i];
      const nextRow = row + currentDir[0];
      const nextCol = col + currentDir[1];
      
      if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
        continue;
      }

      if (matrix[nextRow][nextCol] === FRESH) {
        matrix[nextRow][nextCol] = 2;
        freshOranges--;
        queue.push([nextRow, nextCol]);
      }
    }
  }
  
  if(freshOranges !== 0) {
    return -1;
  }
  
  return minutes;
};

/* 
For some reason my code gets to the very last check then fails because it says the literal integer 1 is undefined.. I don't get it.

// Input is a matrix
// Output should be an integer
// Output should be number of seconds required to rot the entire grid of oranges
// Output must be -1 if it's impossible 
// Every second, a rotten orange rots four directionally, ie. if displayed in a grid format [-1, 0], [0, 1], [1, 0], [0, -1] representing up, right, left, and down in terms of an array of arrays/matrix/grid
// What are we really counting? The number of fresh oranges. When we have no fresh oranges left, or have checked all our rotten oranges, we can return either the seconds or -1 if there are still fresh oranges left
// I'm thinking, go through the entire matrix first, push all the rotten oranges into a queue, then run a function while the queue still has values inside, and loop over the directions and if it finds a fresh orange, switch the value to rotten, once it gets through everything in our queue, increment the seconds by 1, push anything turned rotten's location in the grid to the queue
// If at any point during this loop the number of fresh oranges has been reduced to 0, return the current value of seconds
// If the queue becomes empty, and the fresh oranges are greater than 0, return -1
// If no input just return -1
const directions = [
  [-1, 0], 
  [0, 1], 
  [1, 0],
  [0, -1]
];

var orangesRotting = function(grid) {
  if (!grid) return -1;
  
  let freshOranges = 0;
  let queue = [];
  let newQueue = [];
  // Loop through the grid, finding the rotten oranges and counting the fresh oranges, push rottens to the 
  // 1 = fresh orange, 2 = rotten orange
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshOranges++;
      } else if (grid[i][j] === 2) {
        queue.push([i,j]);
      }
    }
  }
    // You must use two queues, so that when one is empty, you know to increment the minutes
  let minutesPassed = 0;
  // Go through the queue and begin modifying values based on if they are touching a rotten orange, and increment our counters
  while (queue.length) {
      console.log(queue)
    const currentIndex = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      // Check if out of bounds
      const newRow = currentIndex[0] + directions[i][0];
      const newColumn = currentIndex[1] + directions[i][1];
      if (newRow < 0 || newRow > grid.length || newColumn < 0 || newColumn > grid[0].length) continue;
      console.log(grid[newRow][newColumn])
      if (grid[newRow][newColumn] === 1) {
        // You must also set these values that were rotten to 2s, so they aren't counted again and don't cause the grid to rot twice as fast
        freshOranges--;
        grid[newRow][newColumn] = 2;
        newQueue.push([newRow, newColumn]);
      }
    }
    if (queue.length === 0) {
      minutesPassed++;
      queue = newQueue;
      newQueue = [];
    }
    if (freshOranges === 0) return minutesPassed;
  }
    return -1;
};

console.log(orangesRotting([
                            [2,1,1],
                            [1,1,0],
                            [0,1,1]
                           ]));
*/