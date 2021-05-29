//Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height
class TreeNode {
 constructor(val) {
   this.val = val;
   this.left = null;
   this.right = null;
   this.next = null;
 }
 
function create_minimal_BST(array) {
 return create_BST_recursive(array, 0, array.length - 1);
}
 
function create_BST_recursive(array, start, end) {
 let mid = 0;
 mid = Math.ceil((start + end)/2);
 let treeNode = new TreeNode(array[mid]);
 // console.log(start, mid, end, treeNode);
 if(start <= (mid - 1)) {
   treeNode.left = create_BST_recursive(array, start, mid - 1);
 }
 if((mid + 1) <= end) {
   treeNode.right = create_BST_recursive(array, mid + 1, end);
 }
 return treeNode;
}
