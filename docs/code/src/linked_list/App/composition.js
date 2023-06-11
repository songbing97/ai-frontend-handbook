class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new ListNode(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Invalid index');
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new ListNode(value);
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;

    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if (index === 0) {
      this.head = currentNode.next;
    } else {
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        currentIndex++;
      }

      previousNode.next = currentNode.next;
      if (index === this.length - 1) {
        this.tail = previousNode;
      }
    }

    this.length--;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Invalid index');
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode.value;
  }

  toArray() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  size() {
    return this.length;
  }
}

// Test
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.insert(2, 5);
linkedList.remove(1);
console.log(linkedList.toArray()); // 输出 [0, 1, 5, 3]
console.log(linkedList.get(2)); // 输出 5
console.log(linkedList.size()); // 输出 4
