// Check subtree: T1 and T2 are two very large binary trees, with T1 much bigger than T2. Create an algorithm to determine if T2 is a subtree of T1.

class TreeNode {
constructor(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
};
 
const is_sub_tree = function(root, node) {
 if(root === null) {
   return false;
 }
 if(node === null) {
   return true;
 }
 if(root.val === node.val && match_tree(root, node)) {
   return true;
 }
 
 return is_sub_tree(root.left, node) || is_sub_tree(root.right, node);
}
 
const match_tree = function(node1, node2) {
 if(node1 === null && node2 === null) {
   return true;
 } else if( node1 === null || node2 === null) {
   return false;
 } else if(node1.val !== node2.val) {
   return false;
 }
 let isLeftSubtreeMatching = true, isRightSubtreeMatching = true;
 if(node2.left !== null) {
   isLeftSubtreeMatching = match_tree(node1.left, node2.left);
 }
 if(node2.right !== null) {
   isRightSubtreeMatching = match_tree(node1.right, node2.right)
 }
 return isLeftSubtreeMatching && isRightSubtreeMatching;
 
}
 
var root = new TreeNode(3);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(6);
 
var root1 = new TreeNode(5);
root1.right = new TreeNode(6);
 
var root2 = new TreeNode(5);
root2.left = new TreeNode(4);
 
var root3 = new TreeNode(5);
root3.left = new TreeNode(4);
root3.right = new TreeNode(6);
 
var root4 = new TreeNode(3);
root4.left = new TreeNode(2);
root4.right = new TreeNode(5);
 
var root5 = new TreeNode(15);
root5.left = new TreeNode(4);
root5.right = new TreeNode(61);
 
console.log(`Is the tree with root ${root1.val} a subtree of tree with root ${root.val}? ${is_sub_tree(root, root1)}`);
console.log(`Is the tree with root ${root2.val} a subtree of tree with root ${root.val}? ${is_sub_tree(root, root2)}`);
console.log(`Is the tree with root ${root3.val} a subtree of tree with root ${root.val}? ${is_sub_tree(root, root3)}`);
console.log(`Is the tree with root ${root4.val} a subtree of tree with root ${root.val}? ${is_sub_tree(root, root4)}`);
console.log(`Is the tree with root ${root5.val} a subtree of tree with root ${root.val}? ${is_sub_tree(root, root5)}`);
 
