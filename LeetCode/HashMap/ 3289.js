// 3289. The Two Sneaky Numbers of Digitville
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  const repeatedNumbers = new Array(2)
  const countMap = {}
  let idx = 0
  for (const num of nums) {
    if (countMap[num]) {
      repeatedNumbers[idx] = num
      idx += 1
      countMap[num] += 1
    } else {
      countMap[num] = 1
    }
  }
  return repeatedNumbers
}

const nums = [0, 1, 1, 0]

// getSneakyNumbers(nums)
console.log(getSneakyNumbers(nums))