// 2191. Sort the Jumbled Numbers

/*Time Complexity:
 * 𝑂(𝑛log⁡𝑛)
 * Space Complexity:
 * 𝑂(𝑛)
 */

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */

function sortJumbled (mapping, nums) {
  // Helper function to map a number to its mapped value
  function mapNumber (num) {
    return parseInt(
      String(num)
        .split('')
        .map(digit => mapping[parseInt(digit)])
        .join(''),
      10
    )
  }

  // Create an array of objects with the original number and its mapped value
  let mappedNums = nums.map(num => ({
    original: num,
    mapped: mapNumber(num)
  }))

  // Sort the array based on the mapped values
  mappedNums.sort((a, b) => {
    if (a.mapped === b.mapped) {
      return nums.indexOf(a.original) - nums.indexOf(b.original)
    }
    return a.mapped - b.mapped
  })

  // Extract the original numbers in the new sorted order
  return mappedNums.map(item => item.original)
}

// Example usage:
const mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6]
const nums = [991, 338, 38]
console.log(sortJumbled(mapping, nums)) // Output: [338, 38, 991]

const mapping2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const nums2 = [789, 456, 123]
console.log(sortJumbled(mapping2, nums2)) // Output: [123, 456, 789]
