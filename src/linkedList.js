class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node = new Node(element);
    let curr;

    if (this.head === null) {
      this.head = node;
    } else {
      curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return false;
    }
    const node = new Node(element);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
    }
  }
}
