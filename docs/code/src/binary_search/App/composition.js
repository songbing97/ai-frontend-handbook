function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 找到目标值，返回索引
    } else if (arr[mid] < target) {
      left = mid + 1; // 目标值在右侧，缩小搜索范围
    } else {
      right = mid - 1; // 目标值在左侧，缩小搜索范围
    }
  }

  return -1; // 没有找到目标值
}

//Test
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

const result = binarySearch(arr, target);
console.log(result); // 输出 4，表示目标值 9 在索引 4 处找到
