// Link to problem: https://structy.net/problems/linked-list-values

// Iterative Approach:
// Initialize an empty array to store our linked list values and a variable/pointer to keep track of the
// current node. If the current node/pointer is not null, we will push the value of the current
// node into our result array, then set the node equal to the next node. We will continue this process
// as long as the current node is not null.

// Iterative Solution:
const linkedListValues = (head) => {
  const res = [];
  let node = head;
  
  while (node !== null) {
    res.push(node.val);
    node = node.next;
  }
  
  return res;
};

// Iterative Time Complexity:
// O(N) where N represents the number of nodes in the list. We are traversing through the entire list,
// processing each node once.

// Iterative Space Complexity:
// O(N) where N represents the number of nodes in the list. We are storing the values from each node into
// our result array.



// Recursive Approach:
// Pass in a default parameter called res which will be the array we store the list's values in. For
// each recursive call, if the head (basically the current node) is not null, we will push the value
// of the head/node into the result array and then recursively call our function, passing in the next node
// as the first argument and the result array as the second. Once the head is null, we will return the
// result array.

// Recursive Solution:
const linkedListValues = (head, res = []) => {
  if (head === null) return res;
  
  res.push(head.val);
  return linkedListValues(head.next, res);
};

// Recursive Time Complexity:
// O(N) where N represents the number of nodes in the list. We are still processing each node in the list
// once via recursion

// Recursive Space Complexity:
// O(N) where N represents the number of nodes in the list. We are storing the values from each node into
// our result array. You can also say it's O(N) due to the call frames we add to the call stack with each
// recursive call