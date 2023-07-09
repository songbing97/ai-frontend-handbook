# Recursion and Backtracking

## Implement a factorial function using recursion by JavaScript.
To implement a factorial function using recursion in JavaScript, you can use the following approach:

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 and 1 is 1
  } else {
    return n * factorial(n - 1); // Recursive call
  }
}

// Example usage:
const number = 5;
console.log(factorial(number)); // Output: 120
```

In this example, the `factorial` function takes a number `n` as input. It uses recursion to calculate the factorial of `n`.

The base case is defined when `n` equals 0 or 1. In these cases, the function returns 1 since the factorial of 0 and 1 is 1.

For values of `n` greater than 1, the function recursively calls itself with `n - 1` and multiplies the result by `n`. This continues until the base case is reached.

By breaking down the factorial calculation into smaller subproblems, the function effectively calculates the factorial of `n` using recursion.

You can test the `factorial` function with different numbers to calculate their factorials.

## Generate all permutations of a given string by JavaScript.
To generate all permutations of a given string using JavaScript, you can use a recursive approach. Here's an implementation:

```javascript
function generatePermutations(str) {
  const permutations = [];

  // Recursive function to generate permutations
  function permute(current, remaining) {
    if (remaining.length === 0) {
      permutations.push(current); // Base case: all characters used
    } else {
      for (let i = 0; i < remaining.length; i++) {
        const char = remaining[i];
        const newCurrent = current + char;
        const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
        permute(newCurrent, newRemaining); // Recursive call
      }
    }
  }

  permute('', str); // Start with an empty current and the full string as remaining

  return permutations;
}

// Example usage:
const string = 'abc';
console.log(generatePermutations(string)); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

In this example, the `generatePermutations` function takes a string (`str`) as input and returns an array of all permutations of the string.

The function defines an empty array `permutations` to store the generated permutations.

Inside the function, there's a recursive helper function called `permute`. This function takes two parameters: `current` (the current permutation being built) and `remaining` (the remaining characters to be permuted).

The base case occurs when there are no remaining characters. In this case, the current permutation is complete, so it is added to the `permutations` array.

For each recursive call, the function iterates over the remaining characters. It appends the current character to the current permutation (`current + char`), creates a new remaining string without the current character, and makes a recursive call with the updated values.

The function is initially called with an empty current permutation (`''`) and the full input string as the remaining characters.

By recursively permuting the string and building permutations character by character, the function generates all possible permutations.

You can test the `generatePermutations` function with different strings to generate their permutations.

## Implement the Tower of Hanoi problem using recursion by JavaScript.
The Tower of Hanoi is a classic problem that can be solved using recursion. Here's an implementation in JavaScript:

```javascript
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${destination}`);
    return;
  }

  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(`Move disk ${n} from ${source} to ${destination}`);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

// Example usage:
const numDisks = 3;
const sourceTower = 'A';
const auxiliaryTower = 'B';
const destinationTower = 'C';

towerOfHanoi(numDisks, sourceTower, auxiliaryTower, destinationTower);
```

In this example, the `towerOfHanoi` function takes four parameters: `n` (the number of disks), `source` (the source tower), `auxiliary` (the auxiliary tower), and `destination` (the destination tower).

The base case is when there's only one disk (`n === 1`). In this case, it simply prints the move required to move the disk from the source tower to the destination tower.

For `n > 1`, the function follows these steps recursively:
1. Move `n - 1` disks from the source tower to the auxiliary tower, using the destination tower as the auxiliary.
2. Move the largest disk from the source tower to the destination tower.
3. Move the `n - 1` disks from the auxiliary tower to the destination tower, using the source tower as the auxiliary.

By breaking down the problem into smaller subproblems and using recursion, the function effectively solves the Tower of Hanoi problem.

When you run the example code with `numDisks = 3`, it will print the required moves to solve the Tower of Hanoi puzzle with three disks, moving them from tower A to tower C.

## Find all possible subsets of a set by JavaScript.
To find all possible subsets of a set using JavaScript, you can use a recursive approach. Here's an implementation:

```javascript
function findSubsets(set) {
  const subsets = [];

  // Recursive function to find subsets
  function find(currentSubset, remainingSet) {
    subsets.push(currentSubset); // Add current subset to subsets

    for (let i = 0; i < remainingSet.length; i++) {
      find(currentSubset.concat(remainingSet[i]), remainingSet.slice(i + 1));
      // Recursively find subsets with the remaining elements
    }
  }

  find([], set); // Start with an empty current subset and the full set

  return subsets;
}

// Example usage:
const set = [1, 2, 3];
console.log(findSubsets(set));
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
```

In this example, the `findSubsets` function takes a set (an array) as input and returns an array of all possible subsets of the set.

The function defines an empty array `subsets` to store the generated subsets.

Inside the function, there's a recursive helper function called `find`. This function takes two parameters: `currentSubset` (the current subset being built) and `remainingSet` (the remaining elements to form subsets from).

The base case occurs when there are no remaining elements in the `remainingSet`. In this case, the current subset is complete, so it is added to the `subsets` array.

For each recursive call, the function iterates over the remaining elements in the `remainingSet`. It appends the current element to the current subset (`currentSubset.concat(remainingSet[i])`), creates a new `remainingSet` without the current element (`remainingSet.slice(i + 1)`), and makes a recursive call with the updated values.

The function is initially called with an empty current subset (`[]`) and the full set as the remaining elements.

By recursively generating subsets by including or excluding each element, the function generates all possible subsets of the set.

You can test the `findSubsets` function with different sets to find all possible subsets of the set.

## Implement a Sudoku solver using backtracking by JavaScript.
To implement a Sudoku solver using backtracking in JavaScript, you can use the following approach:

```javascript
function solveSudoku(board) {
  if (solve(board)) {
    return board;
  } else {
    return "No solution exists.";
  }
}

function solve(board) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isValid(board, row, col, num)) {
            board[row][col] = num;

            if (solve(board)) {
              return true;
            } else {
              board[row][col] = 0;
            }
          }
        }

        return false;
      }
    }
  }

  return true;
}

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === num || board[i][col] === num) {
      return false; // Check row and column
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let m = 0; m < 3; m++) {
      for (let n = 0; n < 3; n++) {
        if (board[startRow + m][startCol + n] === num) {
          return false; // Check 3x3 grid
        }
      }
    }
  }

  return true;
}

// Example usage:
const sudokuBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(solveSudoku(sudokuBoard));
```

In this example, the `solveSudoku` function takes a Sudoku board (a 2D array) as input and returns the solved board or a message indicating that no solution exists.

The `solve` function implements the backtracking algorithm to solve the Sudoku puzzle. It uses a nested loop to iterate through each cell in the board. If a cell is empty (represented by 0), it tries assigning numbers from 1 to 9 and checks if the assignment is valid using the `isValid` function. If a valid number is found, it fills the cell with that number and recursively calls the `solve` function for the next empty cell. If a solution is found, it returns true. If no valid number is found, it backtracks by resetting the cell to 0 and tries a different number.

The `isValid` function checks if a number assignment is valid by checking the row, column, and the corresponding 3x3 grid.

The example usage shows how to solve a Sudoku puzzle by calling the `solveSudoku` function with the initial board. The solved board is then printed to the console.

You can test the `solveSudoku` function with different Sudoku boards to solve them using backtracking.
