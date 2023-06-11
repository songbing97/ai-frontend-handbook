function findDuplicates(arr) {
  const countMap = {};
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (countMap[element]) {
      countMap[element]++;
      if (countMap[element] === 2) {
        duplicates.push(element);
      }
    } else {
      countMap[element] = 1;
    }
  }

  return duplicates;
}

// Test
const arr = [1, 2, 3, 4, 2, 3, 5, 6, 4];
const result = findDuplicates(arr);
console.log(result); // 输出 [2, 3, 4]
