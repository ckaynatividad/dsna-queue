class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }
}

let test = [];
test.push("balls");
test.push("hello");
const ugly = "ugly";
test[test.length] = 5;
const hello = test.splice(-1);
console.log(hello, test);
console.log(test);

const stack = new Stack();
stack.push("noodles");
console.log(stack.pop("djkhs"));

class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  enqueue(item) {
    return this.queue.unshift(item);
  }

  dequeue() {
    return this.queue.pop();
  }

  hasNext() {
    if (this.queue.length > 0) {
      return true;
    }
    return false;
  }
}

const queue = new Queue();
queue.enqueue("fox");
queue.enqueue("goose");
queue.enqueue("lizard");
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue("llama");
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue());
