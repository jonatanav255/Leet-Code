// 1512. Number of Good Pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const countMap = {}
  let goodPairs = 0

  for (const num of nums) {
    console.log(num)
    if (countMap[num]) {
      goodPairs += countMap[num]
      countMap[num] += 1
    } else {
      countMap[num] = 1
    }
  }
  return goodPairs
}

const nums = [1, 2, 3, 1, 1, 3]

console.log(numIdenticalPairs(nums))
// numIdenticalPairs(nums)
