const Deque = require("./collections/deque");
 
class TreeNode {
 constructor(val) {
   this.val = val;
   this.left = null;
   this.right = null;
 }
};
 
class Node {
 constructor(val) {
   this.val = val;
   this.next = null;
 }
 
 print_list() {
   let currentNode = this;
   while (currentNode !== null) {
     process.stdout.write(`${currentNode.val} `);
     currentNode = currentNode.next;
   }
   console.log();
 }
};
 
function connect_level_order_siblings_DFS(root) {
 return connect_level_order_siblings_DFS_recursive(root, new Deque(), 0);
}
 
const connect_level_order_siblings_DFS_recursive = function (currentNode, queue, level) {
 if(currentNode === null) {
   return;
 }
 let node = new Node();
 node.val = currentNode.val;
 node.next = null;
 let levelNode = null;
 if(queue.length === level) {
   queue.push(node);
 } else {
   levelNode = queue[level];
   while(levelNode.next !== null) {
     levelNode = levelNode.next;
   }
   levelNode.next = node;
 }
 
 connect_level_order_siblings_DFS_recursive(currentNode.left, queue, level + 1);
 connect_level_order_siblings_DFS_recursive(currentNode.right, queue, level + 1);
 return queue.toArray();
}
 
 
 
var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

let result = connect_level_order_siblings_DFS(root);
for(let i = 0; i < result.length; i++) {
 let node = new Node();
 node = result[i];
 node.print_list();
}
