// Link to problem: https://structy.net/problems/premium/five-sort

// Approach:
// Use two pointers. The left pointer starts at the beginning of the array and the right pointer starts
// at the end. Whenever the left pointer encounters a 5, we'll swap it with the element at the right
// pointer, then move the right pointer to the left (because we know that we just placed a 5 at the right
// pointer, we want it to stay there at the end). Otherwise, if the left pointer is not pointing at a 5,
// we'll just move the left pointer down one position to the right. Once the two pointers cross each other,
// we know we're done.

// Solution:
const fiveSort = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  
  while (l < r) {
    if (nums[l] === 5) {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      r -= 1;
    } else {
      l += 1;
    }
  }
  
  return nums;
};

// Time Complexity:
// O(N) where N represents the length of the array. We're only processing each element in the array
// once with our pointers.

// Space Complexity: 
// O(1). We're not allocating any extra memory with this solution.