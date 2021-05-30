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

const find_common_ancestor = function(root, node1, node2) {
  if(!covers(root, node1) || !(covers(root, node2))) {
    return null;
  }
  else if(covers(node1, node2)) {
    return node1;
  }
  else if(covers(node2, node1)) {
    return node2;
  }

  let sibling = get_sibling(node1);
  let parent = node1.parent;
  while(!(covers(sibling, node2))) {
    sibling = get_sibling(parent);
    parent = sibling.parent;
  }
  return parent;
}

const get_sibling = function(node) {
  if(node === null) {
    return null;
  }
  let parent = node.parent;
  return (node === parent.left) ? parent.right : parent.left;
}

const covers = function(root, node) {
  if (root === null) {
    return null;
  }

  if(root === node) {
    return true;
  }

  return covers(root.left, node) || covers(root.right, node);
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

console.log(`The common ancestor for the nodes ${root.right.left.val} and ${root.right.right.val} is : ${find_common_ancestor(root, root.right.left, root.right.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.val} and ${root.right.right.val} is : ${find_common_ancestor(root, root.left, root.right.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.left.val} and ${root.right.right.val} is : ${find_common_ancestor(root, root.left.left, root.right.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.val} and ${root.right.val} is : ${find_common_ancestor(root, root.left, root.right).val}`);
console.log(`The common ancestor for the nodes ${root.left.val} and ${root.val} is : ${find_common_ancestor(root, root.left, root).val}`);
