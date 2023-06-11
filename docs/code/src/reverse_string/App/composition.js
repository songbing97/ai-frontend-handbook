function reverseString(str) {
  const charArray = str.split('');
  const reversedArray = charArray.reverse();
  const reversedStr = reversedArray.join('');

  return reversedStr;
}

// Test
const str = "Hello, World!";
const result = reverseString(str);
console.log(result);
