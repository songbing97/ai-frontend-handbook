function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // 选择基准点
  const left = [];
  const equal = [];
  const right = [];

  for (let element of arr) {
    if (element < pivot) {
      left.push(element); // 小于基准点的元素放入左数组
    } else if (element === pivot) {
      equal.push(element); // 等于基准点的元素放入相等数组
    } else {
      right.push(element); // 大于基准点的元素放入右数组
    }
  }

  return quickSort(left).concat(equal, quickSort(right)); // 递归排序左右数组并拼接结果
}

const arr = [8, 3, 1, 5, 9, 2, 7, 4, 6];
const sortedArr = quickSort(arr);
console.log(sortedArr); // 输出 [1, 2, 3, 4, 5, 6, 7, 8, 9]
