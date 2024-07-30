// 217. Contains Duplicate

const nums = [1, 2, 3, 1]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const listOfNumbers = new Set()

  for (const iterator of nums) {
    if (listOfNumbers.has(iterator)) {
      return true
    } else {
      listOfNumbers.add(iterator)
    }
  }
  return false
}

console.log(containsDuplicate(nums))
// containsDuplicate(nums)
