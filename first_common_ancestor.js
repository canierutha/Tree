// First Common Ancestor - Write an algorithm to find the first common ancestor of 2 nodes in a binary tree. 
// Avoid storing additional nodes in a data structure. 
// Note: This is not necessarily a binary search tree.

class TreeNode {
 constructor(val) {
   this.val = val;
   this.left = null;
   this.right = null;
   this.parent = null;
 }
};

const find_common_ancestor = function(node1, node2) {
  let depth1 = get_depth(node1);
  let depth2 = get_depth(node2);

  node1 = (depth1 > depth2) ? go_up_by(node1, depth1 - depth2) : node1;
  node2 = (depth2 > depth1) ? go_up_by(node2, depth2 - depth1) : node2;

  while(node1 !== node2 && node1 !== null && node2 !== null) {
    node1 = node1.parent;
    node2 = node2.parent;
  }
  console.log(depth1, depth2, node1.val, node2.val);
  return (node1 === null || node2 === null) ? null : node1;
}

const get_depth = function(node) {
  if(node === null) {
    return 0;
  }
  let depth = 0;
  while(node !== null) {
    node = node.parent;
    depth++;
  }
  return depth;
}

const go_up_by = function(node, height) {
  if (node === null) {
    return null;
  }

  for (let i = height; i > 0; i--) {
    if(node.parent !== null) {
      node = node.parent;
    }
  }
  return node;
}

var root = new TreeNode(3);
root.left = new TreeNode(2);
root.left.parent = root;
root.right = new TreeNode(5);
root.right.parent = root;
root.left.left = new TreeNode(1);
root.left.left.parent = root.left;
root.right.left = new TreeNode(4);
root.right.left.parent = root.right;
root.right.right = new TreeNode(6);
root.right.right.parent = root.right;

console.log(`The common ancestor for the nodes ${root.right.left.val} and ${root.right.right.val} is : ${find_common_ancestor(root.right.left, root.right.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.val} and ${root.right.right.val} is : ${find_common_ancestor(root.left, root.right.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.left.val} and ${root.right.right.val} is : ${find_common_ancestor(root.left.left, root.right.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.val} and ${root.right.val} is : ${find_common_ancestor(root.left, root.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.val} and ${root.val} is : ${find_common_ancestor(root.left, root).val}`);
