// Link to problem: https://structy.net/problems/linked-list-find

// Iterative Approach:
// Initialize a variable/pointer called node to keep track of the current node. As long as the current
// node is not null, we will check if its value is equal to the target. If it is, return true. Otherwise,
// check the next node. Once the current node is null and we haven't found a node with a value that's equal
// to the target, return false.

// Iterative Solution:
const linkedListFind = (head, target) => {
  let node = head;
  
  while (node !== null) {
    if (node.val === target) return true;
    node = node.next;
  }
  
  return false;
};

// Iterative Time Complexity:
// O(N) where N represents the number of nodes in the list. We are going to be traversing through our list,
// processing each node once.

// Space Complexity:
// O(1), we're not allocating any extra memory here.



// Recursive Approach:
// If the input head is null, we can just return false (this is one of our base cases). If it is not null
// and its value is equal to the target, we can return true (second base case). Otherwise, just recursively 
// call our linkedListFind function, passing in the next node as its first argument. We will return the
// result of this recursive call.

// Recursive Solution:
const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  
  return linkedListFind(head.next, target);
};

// Recursive Time Complexity: 
// O(N) where N represents the number of nodes in the list. We will be traversing through our list, 
// processing each node once.

// Recursive Space Complexity:
// O(N) where N represents the number of nodes in the list. We will be adding a call frame onto our
// call stack for each node in the list.