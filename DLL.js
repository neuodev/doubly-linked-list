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
    this.lengt = 0;
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
    this.lengt++;
    return node;
  }
}

const DLL = new DoulyLinkedList();
DLL.push(0);
DLL.push(1);
DLL.push(2);
DLL.push(3);
console.log(DLL);
