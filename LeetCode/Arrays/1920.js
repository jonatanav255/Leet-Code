/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  const ans = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]]
  }
  return ans
}

const nums = [0, 2, 1, 5, 3, 4]
buildArray(nums)
// Output: [0,1,2,4,5,3]
