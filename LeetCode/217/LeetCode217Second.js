// 217. Contains Duplicate

const nums = [1, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const listOfNumbers = new Set(nums)

  return listOfNumbers.size !== nums.length
}
