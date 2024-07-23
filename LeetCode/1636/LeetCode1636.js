// 1636. Sort Array By Increasing frequency

/*
 * Time Complexity:  𝑂(n log b) --- Space Complexity: 𝑂(n)
 */

/**
 * @param {number[]} numbers
 * @return {number[]}
 */

function frequencySort (numbers) {
  // Create a frequency map to count the occurrences of each number
  const freqMap = new Map()

  // Iterate through the array and populate the frequency map
  numbers.forEach(num => {
    // If the number is already in the map, increment its count, otherwise set it to 1
    freqMap.set(num, (freqMap.get(num) || 0) + 1)
  })

  // Sort the array based on the frequency, and then by value in decreasing order
  numbers.sort((a, b) => {
    // Get the frequency of element 'a' from the frequency map
    const freqA = freqMap.get(a)
    // Get the frequency of element 'b' from the frequency map
    const freqB = freqMap.get(b)

    // If frequencies are the same, sort by value in decreasing order
    if (freqA === freqB) {
      return b - a
    }

    // Otherwise, sort by frequency in increasing order
    return freqA - freqB
  })

  // Return the sorted array
  return numbers
}

// Example 1
let numbers1 = [1, 1, 2, 2, 2, 3]
console.log(frequencySort(numbers1)) // Output: [3, 1, 1, 2, 2, 2]

// Example 2
let numbers2 = [2, 3, 1, 3, 2]
console.log(frequencySort(numbers2)) // Output: [1, 3, 3, 2, 2]

// Example 3
let numbers3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
console.log(frequencySort(numbers3)) // Output: [5, -1, 4, 4, -6, -6, 1, 1, 1]
