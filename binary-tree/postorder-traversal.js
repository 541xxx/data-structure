const tree = require("./tree");

/**
 * 然而后序遍历结点的访问顺序是：左儿子 -> 右儿子 -> 自己。
 * 那么一个结点需要两种情况下才能够输出： 第一，它已经是叶子结点； 第二，它不是叶子结点，但是它的儿子已经输出过。
 * 那么基于此我们只需要记录一下当前输出的结点即可.
 * 对于一个新的结点，如果它不是叶子结点，儿子也没有访问，那么就需要将它的右儿子，左儿子压入。
 * 如果它满足输出条件，则输出它，并记录下当前输出结点。输出在 stack 为空时结束。
 */
function postorderTraversal(root) {
  const res = [];
  const stack = [root];
  let p = root;
  while (stack.length) {
    // 当前遍历元素
    const top = stack[stack.length - 1];
    // 它已经是叶子结点或者它的子元素已经被遍历
    if ((!top.left && !top.right) || top.left === p || top.right === p) {
      p = stack.pop();
      res.push(p.value);
    } else {
      if (top.right) {
        stack.push(top.right);
      }
      if (top.left) {
        stack.push(top.left);
      }
    }
  }
  return res;
}

console.log(postorderTraversal(tree))
