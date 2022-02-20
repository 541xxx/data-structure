const tree = require("./tree");
/**
 * 这道题可以借助队列实现，首先把 root 入队，然后入队一个特殊元素 Null(来表示每层的结束)。
 * 然后就是 while(queue.length), 每次处理一个节点，都将其子节点（在这里是 left 和 right）放到队列中。
 * 然后不断的出队， 如果出队的是 null，则表式这一层已经结束了，我们就继续 push 一个 null。
 * 如果不入队特殊元素 Null 来表示每层的结束，则在 while 循环开始时保存当前队列的长度，以保证每次只遍历一层（参考下面的 C++ Code）。} root\
 */
function levelOrderTraversal(root) {
  //  根节点入队列, 并入队列一个特殊的标识位，此处是 null
  const queue = [root, null];
  const items = [];
  // 存放每一层的节点
  let levelNodes = [];
  while (queue.length) {
    // 出队列
    let t = queue.shift();
    if (t) {
      // 这一层还没完, 将其左右子树依次入队列
      levelNodes.push(t.value);
      if (t.left) {
        queue.push(t.left);
      }
      if (t.right) {
        queue.push(t.right);
      }
    } else {
      // 代表本层已经结束
      items.push(levelNodes);
      levelNodes = [];
      // 如果不为空继续入队一个 null(此时的目的是给下一层加上结束标识符)
      if (queue.length) {
        queue.push(null);
      }
    }
  }
  return items;
}

console.log(levelOrderTraversal(tree));