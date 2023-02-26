// Link to problem: https://leetcode.com/problems/valid-parentheses/description/

var isValid = function(s) {
    const stack = [];
    const brackets = { '{' : '}', '[' : ']', '(' : ')' };

    for (let char of s) {
        if (brackets.hasOwnProperty(char)) {
            stack.push(brackets[char]);
        } else {
            const popped = stack.pop();
            if (popped !== char) return false;
        }
    }

    return stack.length === 0;
};

// Approach: 
// Utilize a stack to keep track of the bracket we expect. Iterate through each character in the string. If the current
// character is an opening bracket, we know we expect a closing bracket of the same type so push the expected closing
// bracket into the stack. If it's an closing bracket, pop from the stack to see if we get the expected bracket. If not,
// return false. Finally, once we're done iterating through the string, check if the stack is empty. If not, return false
// because this means we're missing a closing bracket.

// Time Complexity:
// O(n) where n represents the length of the input string. We're just iterating through each character of the string once
// and every other operation is constant time

// Space Complexity:
// O(n) where n represents the length of the input string. In the worst case scenario, the string can contain n opening
// brackets, meaning we'll add n closing brackets into the stack.