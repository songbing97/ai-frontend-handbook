function findMinMax(arr) {
  if (arr.length === 0) {
    return null;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
}

// Test
const arr = [5, 8, 2, 1, 10, 4];
const result = findMinMax(arr);
console.log(result); // 输出 { min: 1, max: 10 }
