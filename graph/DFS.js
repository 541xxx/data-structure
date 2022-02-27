const tree = (module.exports = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: [
            {
              value: 4,
            },
          ],
        },
      ],
    },
    {
      value: 5,
      children: [
        {
          value: 6,
          children: [
            {
              value: 7,
            },
          ],
        },
        {
          value: 8,
        },
      ],
    },
    {
      value: 9,
      children: [
        {
          value: 10,
        },
      ],
    },
  ],
});

function depthFirstSearch(target) {
  const visited = [];
  const stack = [tree];
  while (stack.length) {
    const curr = stack.pop();
    if (visited.includes(curr.value)) {
      continue;
    }
    visited.push(curr.value);
    if (curr.value === target) {
      return visited;
    }
    while (curr.children && curr.children.length) {
      stack.push(curr.children.pop());
    }
  }
  return "Not Found";
}

console.log(depthFirstSearch(10));
