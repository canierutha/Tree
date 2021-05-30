// Validate BST - Implement a function to check if a binary tree is a binary search tree

class TreeNode {
 constructor(val) {
   this.val = val;
   this.left = null;
   this.right = null;
 }
};

const check_BST = function(root, previousIndex) {
  if(root === null) {
    return true;
  }

  if(!check_BST(root.left, previousIndex)) return false;

  if(previousIndex !== null && previousIndex >= root.val) {
    return false;
  }
  previousIndex = root.val;

  if(!check_BST(root.right, previousIndex)) return false;

  return true;
}

const check_BST_with_duplicate_nodes = function(root) {
  return check_BST_with_duplicate_nodes_recursive(root, null, null);
}

const check_BST_with_duplicate_nodes_recursive = function(node, min, max) {
  if(node === null) {
    return true;
  }
  if((min !== null && min < node.val) || (max !== null && max < node.val)) {
    return false;
  }

  if(!check_BST_with_duplicate_nodes_recursive(node.left, min, node.val) && 
    !check_BST_with_duplicate_nodes_recursive(node.right, node.val, max)) {
      return false;
  }
  return true;
}

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(check_BST(root, null));

var root1 = new TreeNode(3);
root1.left = new TreeNode(2);
root1.right = new TreeNode(5);
root1.left.left = new TreeNode(1);
root1.right.left = new TreeNode(4);

console.log(check_BST(root1, null));

var root2 = new TreeNode(3);
root2.left = new TreeNode(2);
root2.right = new TreeNode(5);
root2.left.left = new TreeNode(1);
root2.right.left = new TreeNode(4);
root2.right.right = new TreeNode(5);

console.log(check_BST(root2, null));
console.log(check_BST_with_duplicate_nodes(root2));
