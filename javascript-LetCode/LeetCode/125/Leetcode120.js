// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// space complexity of 0(1)
// time complexity of 0(n)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase(); // Convert the string to lowercase for case-insensitive comparison
    let left = 0; // Pointer at the start of the string
    let right = s.length - 1; // Pointer at the end of the string

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        if (!isAlphanumeric(s[left])) {
            left++;
        }
        // Skip non-alphanumeric characters from the right
        else if (!isAlphanumeric(s[right])) {
            right--;
        }
        // If characters do not match, it's not a palindrome
        else if (s[left] !== s[right]) {
            return false;
        }
        // If characters match, move both pointers inward
        else {
            left++;
            right--;
        }
    }

    return true; // All characters matched, so it's a palindrome
};

// Helper function to check if a character is alphanumeric
function isAlphanumeric(c) {
    return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
}



console.log(isPalindrome("A man, a plan, a canal: Panama"))