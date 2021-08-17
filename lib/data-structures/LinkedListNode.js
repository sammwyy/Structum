"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListNode = void 0;
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
exports.LinkedListNode = LinkedListNode;
exports.default = LinkedListNode;
//# sourceMappingURL=LinkedListNode.js.map