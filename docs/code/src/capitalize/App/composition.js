function capitalizeFirstLetter(str) {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    words[i] = capitalizedWord;
  }

  const capitalizedStr = words.join(' ');
  return capitalizedStr;
}

// 示例用法
const str = "hello world";
const result = capitalizeFirstLetter(str);
console.log(result);
