"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Comparator_1 = require("../utils/Comparator");
const LinkedListNode_1 = require("./LinkedListNode");
class LinkedList {
    constructor(comparatorFunction) {
        this.head = null;
        this.tail = null;
        this.compare = new Comparator_1.default(comparatorFunction);
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
    prepend(value) {
        const newNode = new LinkedListNode_1.default(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    append(value) {
        const newNode = new LinkedListNode_1.default(value);
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
    delete(value) {
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
            }
            else {
                currentNode = currentNode.next;
            }
        }
        if (this.tail && this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }
        return deletedNode;
    }
    find(value, callback) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
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
    deleteTail() {
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
            }
            else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return deletedTail;
    }
    deleteHead() {
        if (!this.head) {
            return null;
        }
        const deletedHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    }
    fromArray(values) {
        values.forEach((value) => this.append(value));
        return this;
    }
    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString(callback) {
        return this.toArray()
            .map((node) => node.toString(callback))
            .toString();
    }
    reverse() {
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
exports.LinkedList = LinkedList;
exports.default = LinkedList;
//# sourceMappingURL=LinkedList.js.map