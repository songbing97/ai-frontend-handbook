function countCharacters(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  return charCount;
}

// Show Case 示例用法
const str = "hello world";
const result = countCharacters(str);
console.log(result); // { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
