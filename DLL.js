class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoulyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const node = new Node(val);
    if (this.head === null || this.tail === null) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }
  pop() {
    let node;
    if (this.head === null || this.tail === null) {
      return;
    } else if (this.length === 1) {
      node = this.head;
      this.head = this.tail = null;
    } else {
      node = this.tail;
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
    }

    this.length--;
    console.log(node);
    return node;
  }
}

const DLL = new DoulyLinkedList();
DLL.push(0);
DLL.push(1);
DLL.push(2);
DLL.push(3);
DLL.pop();
DLL.pop();
DLL.pop();
DLL.pop();
DLL.pop();
// console.log(DLL);
