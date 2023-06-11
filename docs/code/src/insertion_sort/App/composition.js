function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Test
const arr = [5, 3, 1, 4, 2];
const sortedArr = insertionSort(arr);
console.log(sortedArr); // 输出 [1, 2, 3, 4, 5]
