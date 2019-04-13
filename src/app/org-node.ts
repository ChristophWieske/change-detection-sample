export interface TreeNodeData {
  counter: number;
  children?: TreeNodeData[];
}

export function incrementNodeAndTheirChildren(node: TreeNodeData) {
  node.counter += 1;
  if (node.children) {
    node.children.forEach(x => incrementNodeAndTheirChildren(x));
  }
}

/* export function incrementNodeAndTheirChildren(node: TreeNodeData) {
  node = Object.assign({}, node, {
    counter: node.counter + 1,
    children: node.children ? node.children.map(x => incrementNodeAndTheirChildren(x)) : undefined
  });

  return node;
} */
