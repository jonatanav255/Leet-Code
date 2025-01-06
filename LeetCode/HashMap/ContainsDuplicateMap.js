/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map()

  for (const element of nums) {
    if (map.has(element)) {
      return true
    } else {
      map.set(element, 'value')
    }
  }
  return false
}

const nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums))
