// link to problem: https://structy.net/problems/premium/uncompress

// Approach:
// Use 2 pointers. The right/second pointer will continue moving down the string as long as it doesn't
// encounter a character/letter. Once it does, slice the string from the left pointer up to but not including
// the right pointer. This will give us the number of times we need to repeat a character. After this, 
// just move the right pointer down one index so it starts at a new position and set the left pointer
// to the right pointer.

// Solution:
const uncompress = (s) => {
  let l = 0;
  let r = 0;
  let res = '';
  
  while (r < s.length) {
    if (isNaN(s[r])) {
      const times = s.slice(l, r);
      res += s[r].repeat(times);
      r += 1;
      l = r;
    } else {
      r += 1;
    }
  }
  
  return res;
};

// Time Complexity:
// O(N * M) where N represents the number of groups in the string and M reperesnts the max number found
// in any group. This is because for each group, we'll need to repeat the character from that group a max
// M times.

// Space Complexity: 
// O(N * M) where N represents the number of groups in the string and M represents the max number found
// in any group. This is because we'll be creating a string of N * M length.