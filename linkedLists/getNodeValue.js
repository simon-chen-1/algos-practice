// Link to problem: https://structy.net/problems/get-node-value

// Iterative Approach:
// Initialize a variable/pointer called node to keep track of the current node. As long as the current
// node is not null, we will check to see if the current node is at the target index (the index is 0). 
// If it is, return its value. If not, set the node equal to the next node. Once the node is null and 
// we haven't found a node at the target index, return null.

// Iterative Solution:
const getNodeValue = (head, index) => {
  let node = head;
  
  while (node !== null) {
    if (index === 0) return node.val;
    index -= 1;
    node = node.next;
  }
  
  return null;
};

// Iterative Time Complexity:
// O(N) where N represents the number of nodes in the list. We are going to be traversing through our list,
// processing each node once.

// Space Complexity:
// O(1), we're not allocating any extra memory here.



// Recursive Approach:
// If the input head is null, we can just return null (this is one of our base cases). If it is not null
// and the index is 0, we can return the node's/head's value (second base case). Otherwise, just recursively 
// call our getNodeValue function, passing in the next node as its first argument. We will return the
// result of this recursive call.

// Recursive Solution:
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  
  return getNodeValue(head.next, index - 1);
};

// Recursive Time Complexity: 
// O(N) where N represents the number of nodes in the list. We will be traversing through our list, 
// processing each node once.

// Recursive Space Complexity:
// O(N) where N represents the number of nodes in the list. We will be adding a call frame onto our
// call stack for each node in the list.