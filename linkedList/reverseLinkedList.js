const Node = require("./SinglelyLinkedList");
const jack = new Node("Jack");
const tom = new Node("Tom");
const kevin = new Node("Kevin");

jack.next = tom;
tom.next = kevin;
kevin.next = null;

console.log(jack);

const reverseLinkedListByRecursion = (node) => {
  if (!node || !node.next) {
    return node;
  }
  const newNode = reverseLinkedListByRecursion(node.next);
  node.next.next = node;
  node.next = null;
  return newNode;
};
// reverseLinkedListByRecursion(jack);
// console.log(kevin);

const reverseLinkedListByIlteration = (node) => {
  let prev = null;
  let curr = node;
  while (curr) {
    let nxt = curr.next;
    curr.next = prev; // 反转箭头
    prev = curr; // 三人行
    curr = nxt;  // 三人行
  }
};

reverseLinkedListByIlteration(jack);
console.log(kevin);
