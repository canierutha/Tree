// BST Sequence : A binary search tree was created by traversing through an array from left to right and inserting each element. 
// Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const pre_order = function(root, arr) {
  if(root === null) {
    return null;
  }
  arr.push(root.value);
  pre_order(root.left, arr);
  pre_order(root.right, arr);
  return arr;
}

const find_permutations = function(nums) {
  result = [];
  let first = nums[0];
  nums = nums.slice(1);
  generate_permutations_recursive(nums, 0, [], result);
  for(let i = 0; i < result.length; i++) {
    result[i].splice(0, 0, first);
  }
  return result;
}

const generate_permutations_recursive = function(nums, index, currentPermutation, allPermutations) {
  if(index === nums.length) {
    allPermutations.push(currentPermutation);
  }
  else {
    for(let i = 0; i < currentPermutation.length + 1; i++) {
      let newPermutation = currentPermutation.slice(0);
      newPermutation.splice(i, 0, nums[index]);
      generate_permutations_recursive(nums, index+1, newPermutation, allPermutations);
      //console.log(index, newPermutation);
    }
  }
}

var root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(5);

console.log(`The preorder traversal of root : ${pre_order(root, [])}`);
console.log('Here are all the permutations: ');
let a = find_permutations(pre_order(root, []));
for(let i = 0 ; i < a.length; i++) {
  console.log(i+1, a[i]);
}
