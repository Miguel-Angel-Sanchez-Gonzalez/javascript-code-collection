class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  }

  pop() {
    if (this.size === 0) return null;

    let current = this.head;
    let previous = null;
    let count = 0;

    if (this.size === 1) {
      this.head = null;
      this.size--;
      return current.value;
    } else {
      while (count < this.size - 1) {
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = null;
    }
    this.size--;
    return current.value;
  }

  shift() {
    if (this.size === 0) return null;

    const current = this.head;
    this.head = this.head.next;
    this.size--;
    return current.value;
  }

  unshift(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  delete() {
    throw new Error("Remove this line and implement the function");
  }

  count() {
    throw new Error("Remove this line and implement the function");
  }
}

// Test cases
const list = new LinkedList();
list.push(23);
list.push(5);
console.log(list.shift());
console.log(list.shift());
console.log(list);
