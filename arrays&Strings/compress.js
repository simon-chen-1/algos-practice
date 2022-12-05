// link to problem: https://structy.net/problems/premium/compress

// Approach:
// Use two pointers. The right/second pointer will continue moving down the string as long as it points 
// to the same character as the left pointer. Once it reaches a character that is different, we can find
// the number of occurrences of the character by subtracting the left pointer from the right pointer. If
// the number of occurrences of the character is greater than 1, we'll add the frequency to the result
// string as well. Otherwise, we'll just add the character w/o the frequency. 

// Solution:
const compress = (s) => {
  let l = 0;
  let r = 0;
  let res = '';
  
  while (l < s.length) {
    if (s[l] !== s[r]) {
      let times = r - l;
      if (times > 1) {
        res += String(times) + s[l];
      } else {
        res += s[l];
      }
      l = r;
    } else {
      r += 1;
    }
  }
  
  return res;
};

// Time Complexity:
// O(N) where N represents the length of the string. We are only processing each character at most once

// Space Complexity: 
// O(N) where N represents the length of the string. If each character in the input string occurs only once,
// our resulting string is going to essentially be the same as the input string.