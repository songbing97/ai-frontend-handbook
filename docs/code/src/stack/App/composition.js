class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

// Test
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // 输出 3

console.log(stack.peek()); // 输出 30

console.log(stack.pop()); // 输出 30
console.log(stack.pop()); // 输出 20

console.log(stack.size()); // 输出 1

console.log(stack.isEmpty()); // 输出 false

stack.clear();

console.log(stack.isEmpty()); // 输出 true

