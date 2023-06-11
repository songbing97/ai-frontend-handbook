function findIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersection = [];

  for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (set1.has(element)) {
      intersection.push(element);
    }
  }

  return intersection;
}

// Test
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const result = findIntersection(arr1, arr2);
console.log(result); // 输出 [3, 4, 5]
