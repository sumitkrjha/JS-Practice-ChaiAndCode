// Activity 1 : Basic Recursion
// Task 1 : Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(4));

// Task 2 : Write a recursive function to calculate the nth fibonnaci number. Log the result for a few test cases.

function getFibonnaci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  else return getFibonnaci(n - 1) + getFibonnaci(n - 2);
}

console.log(getFibonnaci(0));
console.log(getFibonnaci(1));
console.log(getFibonnaci(2));
console.log(getFibonnaci(3));
console.log(getFibonnaci(4));
console.log(getFibonnaci(5));

// Activity 2 : Recursion with Arrays
// Task 3 : Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  else return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([1, 2, 3, 4, 5]));

// Task 4 : Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
let numbers = [-1, -2, -3, -4, -5];
function maxElement(arr, n = 0) {
  if (n === arr.length - 1) return arr[n];
  return Math.max(arr[n], maxElement(arr, n + 1));
}
console.log("Maximum number from the array is: ", maxElement(numbers));

// Activity 3 : String Manipulation with Recursion
// Task 5 : Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str, n = 0) {
  if (n === str.length - 1) return str[n];
  return reverseString(str, n + 1) + str[n];
}

console.log(reverseString("hello a"));

// Task 6 : Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str, n = 0) {
  if (n >= str.length / 2) return `${str} is a palindrome`;
  if (str[n] !== str[str.length - 1 - n]) return `${str} is not a palindrome`;
  return isPalindrome(str, n + 1);
}

console.log(isPalindrome("aba"));
console.log(isPalindrome("abba"));
console.log(isPalindrome("hello"));

// Activity 4 : Recursive Search
// Task 7 : Write a recursive function to perform an binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) return -1;
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
  return binarySearch(arr, target, mid + 1, high);
}
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([1, 2, 3, 4, 5], 1));

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, target, n = 0) {
  if (n >= arr.length) return 0;
  return (arr[n] === target ? 1 : 0) + countOccurrences(arr, target, n + 1);
}
console.log(countOccurrences([1, 2, 3, 2, 1], 2)); // 2
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5

// Activity 5 : Tree Traversal (Optional)
// Task 9 : Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function inOrderTraversal(node, result = []) {
  if (node === null) return result;
  inOrderTraversal(node.left, result);
  result.push(node.value);
  inOrderTraversal(node.right, result);
  return result;
}
let rootOne = new TreeNode(4);
rootOne.left = new TreeNode(2);
rootOne.right = new TreeNode(5);
rootOne.left.left = new TreeNode(1);
rootOne.left.right = new TreeNode(3);

console.log(inOrderTraversal(rootOne)); // [1, 2, 3, 4, 5]

//Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.
function treeDepth(node) {
  if (node === null) return 0;
  return Math.max(treeDepth(node.left), treeDepth(node.right)) + 1;
}
let rootTwo = new TreeNode(4);
rootTwo.left = new TreeNode(2);
rootTwo.right = new TreeNode(5);
rootTwo.left.left = new TreeNode(1);
rootTwo.left.right = new TreeNode(3);

console.log(treeDepth(rootTwo)); // 3
