// 3190. Find Minimum Operations to Make All Elements Divisible by Three
/**
 * @param {number[]} nums
 * @return {number}
 */

const minimumOperations = nums => {
  let output = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 != 0) {
      output += 1
    }
  }
  return output
}
const nums = [1, 2, 3, 4]

// Output: 3
// minimumOperations(nums)
console.log(minimumOperations(nums))
