function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // 将剩余的元素加入结果数组
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  return result;
}

// Test
const arr = [5, 3, 1, 4, 2];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // 输出 [1, 2, 3, 4, 5]
