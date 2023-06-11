function calculateSum(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

// Test
const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log(sum); // 输出 15
