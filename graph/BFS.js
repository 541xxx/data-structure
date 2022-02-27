const tree = require("./graph");

function breadthFirstSearch(target) {
  const visited = [];
  const queue = [tree];
  while (queue.length) {
    const curr = queue.shift();
    if (visited.includes(curr.value)) {
      continue;
    }
    visited.push(curr.value);
    if (curr.value === target) {
      return visited;
    }
    if (curr.children) {
      for (const child of curr.children) {
        queue.push(child);
      }
    }
  }
  return "Not Found";
}

console.log(breadthFirstSearch(4));
