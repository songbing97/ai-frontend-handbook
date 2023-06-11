function isEven (number) {
  return number % 2 === 0;
}

const result0 = isEven(2)
const result1 = isEven(3)
const result2 = isEven(-3)
const result3 = isEven(-101)

console.log(result0) // true
console.log(result1) // false
console.log(result2) // false
console.log(result3) // false
