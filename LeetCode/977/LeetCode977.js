/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const results = []
  let leftPointer = 0
  let rightPointer = nums.length - 1
  let position = nums.length - 1
  //             P
  //   L         R
  // [-4,-1,0,3,10]
  while (leftPointer <= rightPointer) {
    if (nums[leftPointer] ** 2 > nums[rightPointer] ** 2) {
      results[position] = nums[leftPointer] ** 2
      leftPointer++
    } else {
      results[position] = nums[rightPointer] ** 2
      rightPointer--
    }
    position--
  }
  return results
}

const nums = [-4,-1,0,3,10];
sortedSquares(nums);