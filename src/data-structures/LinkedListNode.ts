export class LinkedListNode {
  public readonly value: any | null;
  public next: LinkedListNode | null;

  constructor(value: any, next: any = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback?: Function): string {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

export default LinkedListNode;
