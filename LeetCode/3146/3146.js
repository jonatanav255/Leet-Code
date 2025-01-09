// 3146. Permutation Difference between Two Strings

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  let total = 0

  // Iterate through the first string `s`
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    const index2 = t.indexOf(char) // Find the index of the character in string `t`
    total += Math.abs(index2 - index) // Add the absolute difference
  }

  return total
}

let s = 'abc'
let t = 'bac'
console.log(findPermutationDifference(s, t))
