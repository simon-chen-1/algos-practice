// Link to problem: https://structy.net/problems/premium/intersection

// Approach:
// We can iterate through one array and for each element, scan through the elements in the second array
// to see if the current element is in the second array. However, this would be too slow O(N * M). So, 
// we can create a set which contains the elements from one array. This will provide us with O(1) 
// lookup time. Then, we can iterate through the second array and just check if each element is in 
// the set. If it is, we know the current element is an element found in both arrays.

// Solution:
const intersection = (a, b) => {
  const set = new Set(a);
  const res = [];
  
  for (let num of b) {
    if (set.has(num)) {
      res.push(num);
    }
  }
  
  return res;
};

// Time Complexity:
// O(N + M) where N represents the length of the first array and M represents the length of the second
// array. We have to iterate through each element in the first array to create the set. Then we have
// to iterate through the second array to see if each element is found in the set.

// Space Complexity: 
// O(N) where N represents the length of the first array (creating a set with the elements in the first
// array).