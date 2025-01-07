var isAnagram = function (s, t) {
  if (s.length !== t.length) return false // If lengths differ, they can't be anagrams

  const charCount = new Map()

  // Count frequencies in `s`
  for (let char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1)
  }

  // Subtract frequencies using `t`
  for (let char of t) {
    if (!charCount.has(char) || charCount.get(char) === 0) {
      return false // Extra character in `t` or mismatch
    }
    charCount.set(char, charCount.get(char) - 1)
  }

  return true // All counts matched
}

// Example usage:
console.log(isAnagram('anagram', 'nagaram')) // Output: true
console.log(isAnagram('rat', 'car')) // Output: false
