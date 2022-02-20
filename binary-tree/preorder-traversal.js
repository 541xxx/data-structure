const tree = require("./tree");

/**
 * 前序遍历是根左右的顺序，注意是根开始，那么就很简单。
 * 直接先将根节点入栈，然后 看有没有右节点，有则入栈，再看有没有左节点，有则入栈。 然后出栈一个元素，重复即可。
 */
function preorderTraversal(root) {
  const res = [];
  // 先入栈根元素
  const stack = [root];
  // 前赋值为根元素
  let t = stack.pop();
  while (t) {
    //  判断有没有右节点，有则入栈
    if (t.right) {
      stack.push(t.right);
    }
    // 判断有没有左节点，有则入栈
    if (t.left) {
      stack.push(t.left);
    }
    res.push(t.value);
    t = stack.pop();
  }
  return res;
}

console.log(preorderTraversal(tree))
