class UnionFind {
  // 记录连通分量
  count;
  // 节点 x 的根节点是 parent[x]
  parent;
  // 记录树的“重量”
  size;
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    this.size = new Array(n);
    for (let i = 0; i < n; i++) {
      // 父节点指针初始指向自己
      this.parent[i] = i;
      // 初始数的重量为1
      this.size[i] = 1;
    }
  }
  /* 返回某个节点 x 的根节点 */
  find(x) {
    while (this.parent[x] !== x) {
      // 压缩树
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
  /* 判断 p 和 q 是否连通 */
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
  /* 将 p 和 q 连接 */
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    // 如果某两个节点被连通，则让其中的（任意）
    // 一个节点的根节点接到另一个节点的根节点上
    if (rootP === rootQ) {
      return;
    }
    // 小树接到大树下面，较平衡
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    // 两个分量合二为一
    this.count--;
  }
  getCount() {
    return this.count;
  }
}

const unionFind = new UnionFind(10);

unionFind.union(1, 0);
unionFind.union(2, 5);
unionFind.union(6, 5);
unionFind.union(4, 1);
unionFind.union(3, 4);
unionFind.union(2, 4);

console.log(unionFind.getCount());
console.log('4 1', unionFind.connected(4, 1));