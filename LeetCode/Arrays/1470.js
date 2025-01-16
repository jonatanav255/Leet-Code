// 1470. Shuffle the Array
// time complexity 0(N)
// space complexity 0(N)

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const res = []
  for (let i = 0; i < n; i++) {
    res.push(nums[i])
    res.push(nums[n + i])
    console.log(n + i)
  }
  return res
}

const nums = [2, 5, 1, 3, 4, 7]
const n = 3

shuffle(nums, n)

// Output: [2,3,5,4,1,7]
