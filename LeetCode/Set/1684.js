// 1684. Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

function testCountConsistentStrings (allowed, words, expected) {
  const actual = countConsistentStrings(allowed, words)
  if (actual === expected) {
    console.log(`✅ Test passed! Output: ${actual}`)
  } else {
    console.error(`❌ Test failed! Expected: ${expected}, but got: ${actual}`)
  }
}

var countConsistentStrings = function (allowed, words) {
  const allowedSet = new Set(allowed)
  let res = 0

  for (const word of words) {
    let consistent = true
    for (const char of word) {
      if (!allowedSet.has(char)) {
        consistent = false
        break
      }
    }
    if (consistent === true) {
      res++
    }
  }
  return res
}

// Test Cases
testCountConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'], 2)
testCountConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'], 7)
testCountConsistentStrings('a', ['aaa', 'b', 'aa', 'a'], 3)

// const allowed = 'ab'
// const words = ['ad', 'bd', 'aaab', 'baa', 'badab']

// console.log(countConsistentStrings(allowed, words))
// countConsistentStrings(allowed, words)
