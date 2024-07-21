// Valid Parentheses - LeetCode 20
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // Initialize an empty stack to store opening brackets
    let stack = [];

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // If the character is an opening bracket, push it onto the stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            // If the character is a closing bracket, pop the stack and check for a match
            let prevVal = stack.pop();
            if (prevVal === '(' && char !== ')') return false;
            if (prevVal === '[' && char !== ']') return false;
            if (prevVal === '{' && char !== '}') return false;
            // If the stack is empty (no matching opening bracket), return false
            if (prevVal === undefined) return false;
        }
    }

    // Check if the stack is empty (all brackets are matched)
    return stack.length === 0;
};

// Example usage:
console.log(isValid("}]")); // false
console.log(isValid("()")); // true
console.log(isValid("[]")); // true
console.log(isValid("{}")); // true
console.log(isValid("{}()[]")); // true
