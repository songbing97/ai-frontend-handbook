# String Manipulation

## How to reverse a string by JavaScript? Answer briefly please.
To reverse a string in JavaScript, you can use the following one-liner:

```javascript
const reversedStr = str.split("").reverse().join("");
```

This approach splits the string into an array of characters, reverses the array, and then joins the characters back together to form the reversed string. The resulting `reversedStr` variable will contain the reversed version of the original string.

## How to determine if a string is a palindrome by JavaScript?
To determine if a string is a palindrome in JavaScript, you can use the following approach:

1. Remove any non-alphanumeric characters and convert the string to lowercase to ignore case sensitivity (if needed).

2. Compare the characters from the beginning and end of the string, moving towards the center.

3. If the characters at the corresponding positions are ever different, the string is not a palindrome. In this case, return `false`.

4. If the loop completes without finding any differences, the string is a palindrome. In this case, return `true`.

Here's an example implementation:

```javascript
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// Example usage:
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

In this example, the `isPalindrome` function takes a string as input. It cleans the string by converting it to lowercase and removing non-alphanumeric characters using a regular expression. Then, it compares the characters at the corresponding positions from the beginning and end of the cleaned string, moving towards the center. If any characters differ, the function returns `false`. Otherwise, it returns `true`.

You can test the `isPalindrome` function with different strings to check if they are palindromes or not.

## Count the occurrences of a specific character in a string by JavaScript.
To count the occurrences of a specific character in a string using JavaScript, you can use the following approach:

```javascript
function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Example usage:
const str = "Hello, World!";
const charToCount = "l";
const occurrences = countOccurrences(str, charToCount);
console.log(occurrences); // Output: 3
```

In this example, the `countOccurrences` function takes two parameters: the `str` string in which to search for occurrences and the `char` character to count. It initializes a `count` variable to 0. Then, it iterates over each character in the string using a for loop. If the current character matches the specified character, it increments the `count` variable. Finally, the function returns the total count of occurrences.

You can test the `countOccurrences` function with different strings and characters to count the occurrences of the desired character.

## Find the longest common prefix of an array of strings by JavaScript.
To find the longest common prefix of an array of strings using JavaScript, you can use the following approach:

```javascript
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
const commonPrefix = longestCommonPrefix(strings);
console.log(commonPrefix); // Output: "fl"
```

In this example, the `longestCommonPrefix` function takes an array of strings (`strs`) as input. It first checks if the array is empty and returns an empty string if so. Otherwise, it initializes the `prefix` variable with the first string in the array.

Next, it iterates through the remaining strings in the array (starting from the second string). Within the loop, it repeatedly checks if the current string starts with the current `prefix` using the `indexOf` method. If it doesn't, it removes the last character from the `prefix` using `substring`. If the `prefix` becomes an empty string, it means there is no common prefix, and the function returns an empty string. Otherwise, it continues to the next string.

After iterating through all the strings, the function returns the `prefix`, which represents the longest common prefix among the strings in the array.

You can test the `longestCommonPrefix` function with different arrays of strings to find their longest common prefix.

## Determine if two strings are anagrams of each other by JavaScript.
To determine if two strings are anagrams of each other using JavaScript, you can use the following approach:

```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  // Count the characters in str1
  for (let char of str1) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Decrement the character count for each character in str2
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// Example usage:
const string1 = "listen";
const string2 = "silent";

console.log(areAnagrams(string1, string2)); // Output: true
```

In this example, the `areAnagrams` function takes two strings (`str1` and `str2`) as input. It first checks if the lengths of the two strings are different. If they are, it returns `false` because anagrams must have the same length.

Next, it creates an empty object `charCount` to store the character counts for `str1`.

Then, it iterates over each character in `str1` and increments its count in the `charCount` object.

After that, it iterates over each character in `str2` and checks if the character is present in the `charCount` object. If a character is not found or its count becomes 0, it means the strings are not anagrams, and the function returns `false`. Otherwise, it decrements the count for that character in the `charCount` object.

If the function completes the iteration without returning `false`, it means all characters in `str2` were accounted for in `str1`, and the strings are anagrams of each other. In this case, the function returns `true`.

You can test the `areAnagrams` function with different pairs of strings to determine if they are anagrams of each other.

## Find the first non-repeating character in a string by JavaScript.
To find the first non-repeating character in a string using JavaScript, you can use the following approach:

```javascript
function findFirstNonRepeatingChar(str) {
  const charCount = {};

  // Count the characters in the string
  for (let char of str) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  // Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // Return null if there are no non-repeating characters
}

// Example usage:
const string = "abacddbec";
const firstNonRepeatingChar = findFirstNonRepeatingChar(string);
console.log(firstNonRepeatingChar); // Output: "e"
```

In this example, the `findFirstNonRepeatingChar` function takes a string (`str`) as input. It creates an empty object `charCount` to store the character counts for each character in the string.

It then iterates over each character in the string and increments its count in the `charCount` object.

After that, it iterates over each character in the string again and checks if the count of the character in the `charCount` object is equal to 1. If it is, it means the character is non-repeating, and the function returns that character.

If the function completes the iteration without finding any non-repeating characters, it returns `null` to indicate that there are no non-repeating characters in the string.

You can test the `findFirstNonRepeatingChar` function with different strings to find the first non-repeating character.
