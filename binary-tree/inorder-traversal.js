const tree = require("./tree");
/**
 * 左根右
 * 从根节点开始，先将根节点压入栈
 * 然后再将其所有左子结点压入栈，取出栈顶节点，保存节点值
 * 再将当前指针移到其右子节点上，若存在右子节点，则在下次循环时又可将其所有左子结点压入栈中， 重复上步骤
 */
function inorderTraversal(root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      // 将根节点压入栈
      stack.push(root);
      // 将其所有左子结点压入栈
      root = root.left;
    }
    // 取出栈顶节点
    root = stack.pop();
    res.push(root.value);
    // 将当前指针移到其右子节点上
    root = root.right;
  }
  return res;
}

console.log(inorderTraversal(tree));

function inorderTraversalByRecrusion(root) {
  if (!root) {
    return [];
  }
  const left = inorderTraversalByRecrusion(root.left);
  const mid = root.value;
  const right = inorderTraversalByRecrusion(root.right);
  return left.concat(mid).concat(right);
}

console.log(inorderTraversalByRecrusion(tree), "inorderTraversalByRecrusion");

function inorderTraversalByColor(root) {
  const gray = 0;
  const white = 1;
  const stack = [{ color: white, node: root }];
  const res = [];
  while (stack.length) {
    const { node, color } = stack.pop();
    if (!node) {
      continue;
    }
    if (color === white) {
      stack.push({ color: white, node: node.right });
      stack.push({ color: gray, node: node });
      stack.push({ color: white, node: node.left });
    } else {
      res.push(node.value);
    }
  }
  return res;
}
console.log(inorderTraversalByColor(tree), "inorderTraversalByColor");
