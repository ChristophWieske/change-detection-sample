export interface TreeNodeData {
  counter: number;
  children?: TreeNodeData[];
}

export function _incrementNodeAndTheirChildren(node: TreeNodeData) {
  node.counter += 1;
  if (node.children) {
    node.children.forEach(x => incrementNodeAndTheirChildren(x));
  }

  return node;
}

export function incrementNodeAndTheirChildren(node: TreeNodeData) {
  node = {
    ...node,
    counter: node.counter + 1,
    children: node.children ? node.children.map(x => incrementNodeAndTheirChildren(x)) : undefined
  };

  return node;
}
