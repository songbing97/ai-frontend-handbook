# Sorting and Searching

## Implement a sorting algorithm (e.g., bubble sort, merge sort, quicksort) by JavaScript.
Certainly! Let's implement three popular sorting algorithms: bubble sort, merge sort, and quicksort.

1. Bubble Sort:
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Example usage:
const array = [5, 2, 8, 12, 3];
console.log(bubbleSort(array)); // Output: [2, 3, 5, 8, 12]
```

2. Merge Sort:
```javascript
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
  const mergedArray = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    mergedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    mergedArray.push(right[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
const array = [5, 2, 8, 12, 3];
console.log(mergeSort(array)); // Output: [2, 3, 5, 8, 12]
```

3. Quicksort:
```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      // Swap elements
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // Swap pivot with the element at i+1
  let temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;

  return i + 1;
}

// Example usage:
const array = [5, 2, 8, 12, 3];
console.log(quickSort(array)); // Output: [2, 3, 5, 8, 12]
```

These implementations demonstrate the basic idea behind each sorting algorithm. You can test them with different arrays to observe the sorted output.

## Find the kth smallest element in an unsorted array by JavaScript.
To find the kth smallest element in an unsorted array using JavaScript, you can use various approaches. One common method is to use the Quickselect algorithm, which is an optimized version of the quicksort algorithm. Here's an implementation using the Quickselect algorithm:

```javascript
function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null;
  }

  return quickselect(arr, 0, arr.length - 1, k - 1);
}

function quickselect(arr, start, end, k) {
  const pivotIndex = partition(arr, start, end);

  if (pivotIndex === k) {
    return arr[pivotIndex];
  } else if (pivotIndex < k) {
    return quickselect(arr, pivotIndex + 1, end, k);
  } else {
    return quickselect(arr, start, pivotIndex - 1, k);
  }
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, end);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Example usage:
const array = [8, 4, 2, 9, 1, 5];
const k = 3;
console.log(findKthSmallest(array, k)); // Output: 4
```

In this example, the `findKthSmallest` function takes an array (`arr`) and the value of `k` as input. It first checks if `k` is within the valid range of 1 to the length of the array. If not, it returns `null`.

Then, it calls the `quickselect` function to find the kth smallest element. The `quickselect` function partitions the array using the pivot element and recursively narrows down the search range based on the pivot's position. It returns the value at the pivot index when the pivot index matches the desired kth position.

The `partition` function partitions the array based on the pivot element using the two-pointer approach. It swaps elements as necessary to ensure that elements smaller than the pivot are on the left side, and larger elements are on the right side.

The `swap` function is a utility function to swap two elements in the array.

You can test the `findKthSmallest` function with different arrays and values of `k` to find the kth smallest element in the array.

## Search for an element in a sorted and rotated array by JavaScript.
To search for an element in a sorted and rotated array using JavaScript, you can use a modified binary search algorithm. Here's an implementation:

```javascript
function searchInRotatedArray(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[start] <= arr[mid]) {
      // Left half is sorted
      if (target >= arr[start] && target < arr[mid]) {
        // Target is within the sorted left half
        end = mid - 1;
      } else {
        // Target is in the right half
        start = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > arr[mid] && target <= arr[end]) {
        // Target is within the sorted right half
        start = mid + 1;
      } else {
        // Target is in the left half
        end = mid - 1;
      }
    }
  }

  return -1; // Element not found
}

// Example usage:
const array = [4, 5, 6, 7, 0, 1, 2];
const target = 6;
console.log(searchInRotatedArray(array, target)); // Output: 2
```

In this example, the `searchInRotatedArray` function takes an array (`arr`) and the target element (`target`) as input. It uses a modified binary search algorithm to search for the target element in the rotated array.

The algorithm compares the middle element (`mid`) with the target. If they match, it returns the index of the middle element.

If the left half of the array is sorted (i.e., `arr[start] <= arr[mid]`), it checks if the target is within the sorted left half. If so, it updates the `end` pointer to `mid - 1`. Otherwise, it updates the `start` pointer to `mid + 1`.

If the right half of the array is sorted, it checks if the target is within the sorted right half. If so, it updates the `start` pointer to `mid + 1`. Otherwise, it updates the `end` pointer to `mid - 1`.

The loop continues until the `start` and `end` pointers cross each other. If the target is not found, the function returns -1.

You can test the `searchInRotatedArray` function with different arrays and target values to search for an element in a sorted and rotated array.

## Implement binary search in a sorted array by JavaScript.
To implement binary search in a sorted array using JavaScript, you can use the following approach:

```javascript
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // Element found at index mid
    } else if (arr[mid] < target) {
      start = mid + 1; // Target is in the right half
    } else {
      end = mid - 1; // Target is in the left half
    }
  }

  return -1; // Element not found
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11];
const target = 5;
console.log(binarySearch(array, target)); // Output: 2
```

In this example, the `binarySearch` function takes a sorted array (`arr`) and a target element (`target`) as input. It uses a binary search algorithm to search for the target element in the array.

The algorithm compares the middle element (`arr[mid]`) with the target. If they match, it returns the index `mid` indicating that the element is found.

If the middle element is less than the target, it means the target is in the right half of the array. Therefore, it updates the `start` pointer to `mid + 1`.

If the middle element is greater than the target, it means the target is in the left half of the array. Therefore, it updates the `end` pointer to `mid - 1`.

The loop continues until the `start` and `end` pointers cross each other. If the target is not found, the function returns -1.

You can test the `binarySearch` function with different sorted arrays and target values to perform a binary search and find the index of the target element in the array.

## Given two sorted arrays, merge them into a single sorted array by JavaScript.
To merge two sorted arrays into a single sorted array using JavaScript, you can use the following approach:

```javascript
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // Add remaining elements from arr1
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

In this example, the `mergeSortedArrays` function takes two sorted arrays (`arr1` and `arr2`) as input. It creates an empty array `mergedArray` to store the merged result.

The function iterates through both arrays using two pointers `i` and `j`. It compares the elements at the current indices `i` and `j` and adds the smaller element to the `mergedArray`. The corresponding pointer is then incremented.

After the initial loop, the function adds any remaining elements from either `arr1` or `arr2` to the `mergedArray` by iterating through the respective array with the remaining elements.

Finally, the function returns the `mergedArray`, which contains the merged and sorted elements from both input arrays.

You can test the `mergeSortedArrays` function with different sorted arrays to merge them into a single sorted array.
