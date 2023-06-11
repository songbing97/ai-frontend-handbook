function myBind(func, thisArg, ...args) {
  return function (...innerArgs) {
    return func.apply(thisArg, args.concat(innerArgs));
  };
}

// Test
function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.name}`);
}

const person = {
  name: 'John'
};

const boundGreet = myBind(greet, person, 'Alice');
const result = boundGreet(); // 输出 "Hello, Alice! I'm John"
console.log(result); // 输出 undefined