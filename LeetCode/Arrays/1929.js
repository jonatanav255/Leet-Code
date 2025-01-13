// 1929. Concatenation of Array
// time complexity = O(n)
// space complexity = O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  let ans = []

  for (const num of nums) {
    ans.push(num)
  }
  for (const num of nums) {
    ans.push(num)
  }

  return ans
}

const nums = [1, 2, 1]

getConcatenation(nums)
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
