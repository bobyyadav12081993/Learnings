export class Stack {
  constructor() {
    this.stack = [];
  }

  pop() {
    return this.stack.pop();
  }

  push(item) {
    this.stack.push(item);
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  printStack() {
    this.stack.forEach((val) => {
      console.log(val);
    });
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}
