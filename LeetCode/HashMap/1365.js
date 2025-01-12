// 1365. How Many Numbers Are Smaller Than the Current Number

// Time Complexity: 𝑂(𝑛 log ⁡𝑛)O(nlogn)
// Space Complexity: 𝑂(𝑛)O(n)
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

// console.log(smallerNumbersThanCurrent(nums))
// Output: [4,0,1,1,3]


var smallerNumbersThanCurrent2 = function(nums) {
  const sortedNumbers1 = [...nums].sort((a,b) => a - b)
  const map1 = new Map;

  for(i = 0; i < sortedNumbers1.length; i++){
      // map1.set(sortedNumbers1[i], sortedNumbers1[i])
      // 1,2,2,3,8    
    if (!map1.has(sortedNumbers1[i])) {
      map1.set(sortedNumbers1[i], i)
    }
  }
  
  return nums.map(((num) => map1.get(num))) 

  
};

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
console.log(smallerNumbersThanCurrent2(nums))