# Array Manipulation

## Find the maximum and minimum element in an array by JavaScript.
To find the maximum and minimum elements in an array using JavaScript, you can implement a simple loop to iterate through the array and keep track of the maximum and minimum values. Here's an example:

```javascript
function findMinMax(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min };
}

// Example usage:
const array = [3, 1, 6, 2, 9, 4];
const { max, min } = findMinMax(array);
console.log("Max:", max); // Output: 9
console.log("Min:", min); // Output: 1
```

In this approach, a loop is used to iterate through the array starting from the second element (`i = 1`). The `max` and `min` variables are initialized with the first element of the array. Then, for each subsequent element, if it is greater than the current `max`, it is assigned to `max`. Similarly, if it is smaller than the current `min`, it is assigned to `min`. Finally, the maximum and minimum values are returned as an object.

By iterating through the array once, this approach finds the maximum and minimum elements efficiently.

You can test the `findMinMax` function with different arrays to find their maximum and minimum elements.

## Reverse an array in-place by JavaScript.
To reverse an array in-place using JavaScript, you can swap the elements from the outer ends of the array towards the center. Here's an example:

```javascript
function reverseArrayInPlace(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array); // Output: [5, 4, 3, 2, 1]
```

In this approach, we initialize two pointers: `start` at the beginning of the array and `end` at the end of the array. We iterate through the array using a `while` loop and swap the elements at `start` and `end` positions. Then, we increment `start` and decrement `end` to move towards the center of the array. We continue this process until `start` is no longer less than `end`, which indicates that we have reversed the entire array.

By swapping the elements in-place, we avoid creating a new array and reverse the original array directly.

You can test the `reverseArrayInPlace` function with different arrays to reverse them in-place.

## Remove duplicates from an array by JavaScript.
To remove duplicates from an array using JavaScript, you can utilize the `Set` object or use a loop to create a new array with unique elements. Here are two approaches:

Using Set:

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
```

In this approach, the `Set` object is used to create a new set from the array, which automatically eliminates duplicates since sets only store unique values. The spread operator `...` is then used to convert the set back to an array.

Using a loop:

```javascript
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// Example usage:
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
```

In this approach, a new array `uniqueArray` is created to store the unique elements. The loop iterates through the original array, and for each element, it checks if it already exists in `uniqueArray` using the `includes` method. If it doesn't exist, it is added to `uniqueArray`.

Both approaches will remove duplicates from the array and return a new array with only unique elements. Choose the one that suits your preference or requirements.

## Find the second largest element in an array by JavaScript.
To find the second largest element in an array using JavaScript, you can iterate through the array and keep track of the maximum and second maximum elements. Here's an example implementation:

```javascript
function findSecondLargest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

// Example usage:
const array = [3, 1, 6, 2, 9, 4];
const secondLargest = findSecondLargest(array);
console.log("Second largest:", secondLargest); // Output: 6
```

In this approach, we initialize two variables, `max` and `secondMax`, to -Infinity. We iterate through the array, and for each element, we compare it with `max`. If the element is greater than `max`, we update `secondMax` with the current value of `max` and update `max` with the element. If the element is greater than `secondMax` but not equal to `max`, we update `secondMax` with the element. By the end of the loop, `secondMax` will hold the second largest element in the array.

Note that this approach assumes the array has at least two distinct elements. If the array may contain fewer than two elements or if you want to handle edge cases, you may need to add additional checks.

You can test the `findSecondLargest` function with different arrays to find their second largest element.

## Find the subarray with the maximum sum by JavaScript.
To find the subarray with the maximum sum in an array using JavaScript, you can utilize the Kadane's algorithm. Here's an example implementation:

```javascript
function findMaxSubarraySum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// Example usage:
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(array);
console.log("Maximum subarray sum:", maxSum); // Output: 6
```

In this approach, we initialize two variables, `maxSum` and `currentSum`, with the first element of the array. We then iterate through the array starting from the second element. For each element, we calculate the current sum by taking the maximum of the element itself or the current sum plus the element. This step ensures that we consider whether to start a new subarray or continue the existing subarray. We update `maxSum` with the maximum value between `maxSum` and `currentSum` in each iteration. By the end of the loop, `maxSum` will hold the maximum sum of any subarray in the array.

The Kadane's algorithm is an efficient approach to solve this problem with a time complexity of O(n), where n is the length of the array.

You can test the `findMaxSubarraySum` function with different arrays to find the maximum sum of a subarray.

## Rotate an array by a given number of steps by JavaScript.
To rotate an array by a given number of steps in JavaScript, you can utilize the Array `slice()` and `concat()` methods. Here's an example implementation:

```javascript
function rotateArray(arr, steps) {
  const rotation = steps % arr.length;
  if (rotation === 0) {
    return arr;
  } else if (rotation > 0) {
    const leftPart = arr.slice(rotation);
    const rightPart = arr.slice(0, rotation);
    return leftPart.concat(rightPart);
  } else {
    const leftPart = arr.slice(arr.length + rotation);
    const rightPart = arr.slice(0, arr.length + rotation);
    return leftPart.concat(rightPart);
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const rotatedArray = rotateArray(array, 2);
console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]
```

In this approach, we first calculate the effective rotation amount by taking the modulus (`%`) of the given `steps` with the length of the array. This step ensures that the rotation amount is within the range of the array length.

If the effective rotation is 0, the array remains unchanged and we can return the original array.

If the effective rotation is positive, we split the array into two parts: the left part starting from the `rotation` index until the end, and the right part from the beginning until the `rotation` index. We then concatenate the left and right parts using the `concat()` method to obtain the rotated array.

If the effective rotation is negative, we split the array into two parts: the left part starting from the `arr.length + rotation` index until the end, and the right part from the beginning until the `arr.length + rotation` index. Again, we concatenate the left and right parts to obtain the rotated array.

By using `slice()` and `concat()`, we create a new array that represents the rotated version of the original array.

You can test the `rotateArray` function with different arrays and rotation steps to rotate the array accordingly.
