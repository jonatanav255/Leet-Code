// 1365. How Many Numbers Are Smaller Than the Current Number
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const sortedNumbers = [...nums].sort((a, b) => a - b)
  const map = new Map()

  for (let i = 0; i < sortedNumbers.length; i++) {
    if (!map.has(sortedNumbers[i])) {
      map.set(sortedNumbers[i], i)
    }
  }

  return nums.map(num => map.get(num))
}

const nums = [8, 1, 2, 2, 3]

smallerNumbersThanCurrent(nums)
// console.log(smallerNumbersThanCurrent(nums))
// Output: [4,0,1,1,3]
