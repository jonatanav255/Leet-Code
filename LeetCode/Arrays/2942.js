// 2942. Find Words Containing Character
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// Return an array of indices representing the words that contain the character x.

var findWordsContaining = function (words, x) {
  const res = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      res.push(i)
    }
  }
  return res
}

const words = ['leet', 'code']
const x = 'e'

// Output: [0,1]

findWordsContaining(words, x)
