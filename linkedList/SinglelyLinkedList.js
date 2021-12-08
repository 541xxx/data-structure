/**
 * 单链表的插入 查找 删除操作
 * 链表中存储的是int类型的数据
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  /**
   * 根据value查找节点
   */
  findNodeByValue(value) {
    let currentNode = this.head.next;
    while (currentNode && currentNode.element !== value) {
      currentNode = currentNode.next;
    }
    console.log(currentNode);
    return currentNode || -1;
  }
  findNodeByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;
    while (currentNode && pos !== index) {
      currentNode = currentNode.next;
      pos++;
    }
    return currentNode ? pos : -1;
  }
  /**
   * 向链表末尾追加节点
   */
  append(element) {
    const node = new Node(element);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }
  /**
   * 指定元素向后插入
   */
  insert(newElement, element) {
    const currentNode = this.findNodeByValue(element);
    if (currentNode < 0) {
      console.log("未找到插入位置");
      return;
    }
    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  findPreviousNode(element) {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.element !== element) {
      currentNode = currentNode.next;
    }
    return currentNode || -1;
  }
  remove(element) {
    const node = this.findPreviousNode(element);
    if (node < 0) {
      console.log("删除失败");
      return;
    }
    node.next = node.next.next;
  }
  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
}

// // Test
const LList = new LinkedList();
LList.findNodeByValue("head");
LList.append("chen");
LList.append("curry");
LList.append("sang");
LList.append("zhao"); // chen -> curry -> sang -> zhao
console.log("-------------insert item------------");
LList.insert("qian", "chen"); // 首元素后插入
LList.insert("zhou", "zhao"); // 尾元素后插入
LList.display(); // chen -> qian -> curry -> sang -> zhao -> zhou
console.log("-------------remove item------------");
LList.remove("curry");
LList.display(); // chen -> qian -> sang -> zhao -> zhou
console.log("-------------find by item------------");
LList.findNodeByValue("chen");
console.log("-------------find by index------------");
LList.findNodeByIndex(2);
console.log("-------------与头结点同值元素测试------------");
LList.insert("head", "sang");
LList.display(); // chen -> qian -> sang -> head -> zhao -> zhou
LList.findPreviousNode("head"); // sang
LList.remove("head");
LList.display(); // chen -> qian -> sang -> zhao -> zhou

module.exports = Node;
