/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const setNoDuplicates = new Set()

  for (const element of nums) {
    if (setNoDuplicates.has(element)) {
      return true
    } else {
      setNoDuplicates.add(element)
    }
  }
  return false
}

const nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums))
