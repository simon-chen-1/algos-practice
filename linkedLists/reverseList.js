// Link to problem: https://structy.net/problems/reverse-list

// Iterative Approach:
// Use a previous pointer and a current pointer to help reverse the list. The previous pointer will be
// initialized as null and the current pointer will be initialized as the head. As long as the current
// pointer is not null, we will store the current node's next node into a variable called next to help
// us traverse down the list. Then we will set the current node's next pointer to equal the previous 
// node (which starts off as null). Then we will set the previous pointer to the current node and the
// current node to the node we stored in the next variable. Once the current pointer is null, we'll return
// the previous node, which should be the head of the reversed list.

// Iterative Solution:
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  
  while (curr !== null) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;
};

// Iterative Time Complexity:
// O(N) where N represents the number of nodes in the list. We are going to be traversing through our list,
// processing each node once.

// Space Complexity:
// O(1), we're not allocating any extra memory here.



// Recurisve Approach:
// If the head is null, we will return the previous node (which starts off as null). Otherwise, we will 
// store the current node's next node into a variable called next to help us traverse down the list recursively.
// Then we will set the current node's next pointer to equal the previous node (which starts off as null).
// Finally, we'll recursively call our function, passing in the next node as the new head and the current
// node as the previous.

// Recursive Solution (Note, I created a separate helper function to handle the recursion - not necessary
// but I did so because I didn't want to modify the original function's signature by passing in a default
// parameter):
const reverseList = (head) => {
  const reversed = _reverse(head, null);
  return reversed;
};

const _reverse = (curr, prev) => {
  if (curr === null) return prev;
  
  const next = curr.next;
  curr.next = prev;
  return _reverse(next, curr);
};

// Recursive Time Complexity: 
// O(N) where N represents the number of nodes in the list. We will be traversing through our list, 
// processing each node once.

// Recursive Space Complexity:
// O(N) where N represents the number of nodes in the list. We will be adding a call frame onto our
// call stack for each node in the list.