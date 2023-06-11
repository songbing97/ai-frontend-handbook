function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 交换位置
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const arr = [5, 3, 1, 4, 2];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // 输出 [1, 2, 3, 4, 5]
