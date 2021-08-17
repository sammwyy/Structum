"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("../LinkedList");
describe("LinkedList", () => {
    let linkedList;
    it("Create LinkedList Instance", () => {
        linkedList = new LinkedList_1.default();
        expect(typeof linkedList).not.toBeNull();
    });
    it("Append item to LinkedList", () => {
        linkedList.append("item-1");
        expect(linkedList.getHead().value).toBe("item-1");
        expect(linkedList.getTail().value).toBe("item-1");
    });
});
//# sourceMappingURL=LinkedList.test.js.map