function removeDuplicates(arr) {
  const uniqueSet = new Set(arr);
  const uniqueArr = Array.from(uniqueSet);
  return uniqueArr;
}

// Test
const arr = [1, 2, 3, 2, 4, 3, 5];
const result = removeDuplicates(arr);
console.log(result); // 输出 [1, 2, 3, 4, 5]
