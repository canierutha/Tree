// Check Balanced : Implement a function to check if a binary tree is balanced. 
// For the purpose of this question, a balanced tree is defined to be a tree such that the heights of the 2 subtrees of any node never differ by more than one
// Note - we have two approaches is_balanced_binary_tree which runs at O(nlog n) and is_balanced_binary_tree_optimized which runs at O(n) 

class TreeNode {
 constructor(val) {
   this.val = val;
   this.left = null;
   this.right = null;
 }
};

const get_height = function(node) {
  if(node === null) {
    return -1;
  }
  return Math.max(get_height(node.left), get_height(node.right)) + 1;
}

const is_balanced_binary_tree = function(node) {
  if(node === null) {
    return true;
  }
  let leftHeight = get_height(node.left);
  let rightHeight = get_height(node.right);
  if(Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  else {
    return is_balanced_binary_tree(node.left) && is_balanced_binary_tree(node.right);
  }
}

function  is_balanced_binary_tree_optimized(root) {
 return (check_height(root) !== -1);
}
 
function check_height(root) {
  if(root === null) {
    return 0;
  }
  let leftHeight = check_height(root.left);
  let rightHeight = check_height(root.right);
  let heightDiff = Math.abs(leftHeight - rightHeight);
  if(heightDiff > 1) {
    return -1;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;
  }
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
// root.right.right.right = new TreeNode(15);
// root.right.right.right.right = new TreeNode(25);

console.log(is_balanced_binary_tree(root));
console.log(is_balanced_binary_tree_optimized(root));


