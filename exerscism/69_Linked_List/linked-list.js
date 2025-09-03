// Solución al ejercicio de Exercism: "Linked List"
// Enunciado tomado de Exercism.org

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

  delete(value) {
    if (this.size === 0) return null;

    let current = this.head;
    let previous = null;
    let found = false;

    while (current && !found) {
      if (current.value === value) {
        found = true;
      } else {
        previous = current;
        current = current.next;
      }
    }
    if (!found) return null;

    previous ? (previous.next = current.next) : (this.head = current.next); // Si el previous tiene valor, entre en el else, si no, el valor buscado es el head
    this.size--;
    return current.value;
  }

  count() {
    return this.size;
  }
}

// Test cases
const list = new LinkedList();
list.push(7);
console.log(list.delete(71));
console.log(list.count());
console.log(list);
