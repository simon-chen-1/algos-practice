// link to problem: https://structy.net/problems/premium/anagrams

// Approach:
// Use an object to keep track of the frequency of characters (we know that if strings are anagrams, they
// should have the same characters and the same frequency of those characters). Iterate through each
// character in the first string. Store the characters as keys in the object and their frequencies as 
// their corresponding values. Iterate through each character of the second string. For each character,
// if the character doesn't exist in the object, return false because we know the strings are not anagrams.
// If the characer is in the object, decrement its frequency by 1. Finally, once we're done iterating through
// the second string, iterate through each key in the object. If any of the characters' frequencies do not
// equal 0, return false.

// Solution:
const anagrams = (s1, s2) => {
  const chars = {};
  
  for (let c of s1) {
    chars[c] = (chars[c] || 0) + 1;
  }
  
  for (let c of s2) {
    if (!chars[c]) return false;
    chars[c] -= 1;
  }
  
  for (let c in chars) {
    if (chars[c] !== 0) return false;
  }
  
  return true;
};

// Time Complexity:
// O(N + M) where N represents the length of the first string and M represents the length of the second string.

// Space Complexity: 
// O(N) where N represents the length of the first string (we're only storing characters from the first string
// in our object).