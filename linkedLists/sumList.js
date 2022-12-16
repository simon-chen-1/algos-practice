// Link to problem: https://structy.net/problems/sum-list

// Iterative Approach:
// Initialize a variable called sum to keep track of our running sum and a variable/pointer called node
// to keep track of the current node. If the current node is not null, we will add its value to our running
// sum and set the node to equal the next node. We will continue doing this as long as the current node
// is not null.

// Iterative Solution:
const sumList = (head) => {
  let sum = 0;
  let node = head;
  
  while (node !== null) {
    sum += node.val;
    node = node.next;
  }
  
  return sum;
};

// Iterative Time Complexity:
// O(N) where N represents the number of nodes in the list. We are going to be traversing through our list,
// processing each node once.

// Space Complexity:
// O(1), we're not allocating any extra memory here.



// Recursive Approach:
// If the input head is null, we can just return 0 (this is our base case). If it is not null, we will
// just recursively call our sumList function, passing in the next node as its argument. We will add the
// result of this to the value of the current node, and return the sum.

// Recursive Solution:
const sumList = (head) => {
  if (head === null) return 0;
  
  return head.val += sumList(head.next);
};

// Recursive Time Complexity: 
// O(N) where N represents the number of nodes in the list. We will be traversing through our list, 
// processing each node once.

// Recursive Space Complexity:
// O(N) where N represents the number of nodes in the list. We will be adding a call frame onto our
// call stack for each node in the list.