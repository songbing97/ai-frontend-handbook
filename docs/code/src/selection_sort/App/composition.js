function selectionSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // 交换位置
      const temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }

  return arr;
}


// Test
const arr = [5, 3, 1, 4, 2];
const sortedArr = selectionSort(arr);
console.log(sortedArr); // 输出 [1, 2, 3, 4, 5]
