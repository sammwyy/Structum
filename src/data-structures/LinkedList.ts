import Comparator from "../utils/Comparator";
import LinkedListNode from "./LinkedListNode";

export class LinkedList {
  private head: LinkedListNode | null;
  private tail: LinkedListNode | null;

  private readonly compare: Comparator;

  constructor(comparatorFunction?: Function) {
    this.head = null;
    this.tail = null;
    this.compare = new Comparator(comparatorFunction);
  }

  public getHead(): LinkedListNode | null {
    return this.head;
  }

  public getTail(): LinkedListNode | null {
    return this.tail;
  }

  public prepend(value: any): LinkedList {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  public append(value: any): LinkedList {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    return this;
  }

  public delete(value: any): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      if (this.compare.equal(currentNode.next.value, value)) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail && this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find(value?: any, callback?: Function): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    let currentNode: LinkedListNode | null = this.head;

    while (currentNode) {
      if (callback !== undefined && callback(currentNode.value)) {
        return currentNode;
      }

      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail(): LinkedListNode | null {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return deletedTail;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next && !currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;
    return deletedTail;
  }

  deleteHead(): LinkedListNode | null {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  fromArray(values: Array<any>): LinkedList {
    values.forEach((value: any) => this.append(value));
    return this;
  }

  toArray(): Array<LinkedListNode> {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback?: Function): string {
    return this.toArray()
      .map((node: LinkedListNode) => node.toString(callback))
      .toString();
  }

  reverse(): LinkedList {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

export default LinkedList;
