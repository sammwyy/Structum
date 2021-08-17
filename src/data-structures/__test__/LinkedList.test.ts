import LinkedList from "../LinkedList";

describe("LinkedList", () => {
  let linkedList: LinkedList;

  it("Create LinkedList Instance", () => {
    linkedList = new LinkedList();
    expect(typeof linkedList).not.toBeNull();
  });

  it("Append item to LinkedList", () => {
    linkedList.append("item-1");

    expect(linkedList.getHead().value).toBe("item-1");
    expect(linkedList.getTail().value).toBe("item-1");
  });
});
