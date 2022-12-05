// Link to problem: https://structy.net/problems/premium/most-frequent-char

// Approach:
// Use an object to keep track of the frequency of each character. Once done iterating through each character
// in the string, iterate through each character in the object and use a variable to keep track of the 
// character that occurred the most.

// Solution:
const mostFrequentChar = (s) => {
  const freqs = {};
  let maxFreq = 0;
  let res;
  
  for (let c of s) {
    freqs[c] = (freqs[c] || 0) + 1;
  }
  
  for (let c in freqs) {
    if (freqs[c] > maxFreq) {
      maxFreq = freqs[c];
      res = c;
    }
  }
  
  return res;
};

// Time Complexity:
// O(N) where N represents the length of the string. We're just iterating through each character of the
// string once.

// Space Complexity: 
// O(N) where N represents the length of the string. Our object can contain at most N keys (if the string
// contains all unique characters).