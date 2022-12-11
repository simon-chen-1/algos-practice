// Link to problem: https://structy.net/problems/premium/pair-sum

// Approach:
// We are trying to find two numbers that sum up to the target. So, we can iterate through the 
// array of numbers and subtract the current number from the target to find its complement. Then,
// we can check inside our complements object to see if we've seen this complement before. If not, 
// set the current number as a key in the object and its value as the current index. If we have,
// return an array with the current index and the value (the index) of the complement from the object.

// Solution:
const pairSum = (numbers, targetSum) => {
  const complements = {};
  
  for (let i = 0; i < numbers.length; i++) {
    const complement = targetSum - numbers[i];
    if (complement in complements) {
      return [i, complements[complement]];
    } else {
      complements[numbers[i]] = i;
    }
  }
};

// Time Complexity:
// O(N) where N represents the length of the numbers array. We're just iterating throught the array once
// and there's no repeated work

// Space Complexity:
// O(N) where N represents the length of the numbers array. In the worst case scenario (if there are
// no pairs that sum to the target), we'll end up storing all the numbers as keys in our object.