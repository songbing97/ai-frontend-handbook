class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  length() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

// Test
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.length()); // 输出 3

console.log(queue.dequeue()); // 输出 10
console.log(queue.dequeue()); // 输出 20

console.log(queue.length()); // 输出 1

console.log(queue.isEmpty()); // 输出 false

queue.clear();

console.log(queue.isEmpty()); // 输出 true
