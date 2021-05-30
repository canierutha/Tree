// Write an algorithm to find the next node (i.e. in-order successor) of a given node in a binary search tree. 
// You may assume that each node has a link to its parent.

class TreeNode {
 constructor(val) {
   this.val = val;
   this.left = null;
   this.right = null;
   this.parent = null;
 }
};

const find_next_node_in_inorder = function(root) {
  if(root === null) {
    return null;
  }

  if(root.right !== null) {
    return fetch_left_most_child(root.right);
  } else {
    let parent = root.parent;
    while (parent !== null && parent.left !== root) {
      root = parent;
      parent = root.parent;
    }
    if(parent !== null) {
      return parent;
    }
  }
  return root;
}

const fetch_left_most_child = function (node) {
  if(node === null) {
    return null;
  }
  while (node.left !== null) {
    node = node.left;
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

console.log(`The next node in inorder succession for node ${root.val} is : ${find_next_node_in_inorder(root).val}`);
console.log(`The next node in inorder succession for node ${root.left.val} is : ${find_next_node_in_inorder(root.left).val}`);
console.log(`The next node in inorder succession for node ${root.right.val} is : ${find_next_node_in_inorder(root.right).val}`);
console.log(`The next node in inorder succession for node ${root.left.left.val} is : ${find_next_node_in_inorder(root.left.left).val}`);
console.log(`The next node in inorder succession for node ${root.right.left.val} is : ${find_next_node_in_inorder(root.right.left).val}`);
console.log(`The next node in inorder succession for node ${root.right.right.val} is : ${find_next_node_in_inorder(root.right.right).val}`);
