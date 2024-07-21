// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Initialize an empty object to store numbers and their indices
    const numMap = {};
    console.log(numMap)

    // Loop through each element in the nums array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach the target
        const complement = target - nums[i];
        console.log(complement)


        // Check if the complement exists in the numMap
        if (numMap[complement] !== undefined) {
            // If found, return the indices of the current number and its complement
            return [numMap[complement], i];
        }

        // Store the current number and its index in the numMap
        numMap[nums[i]] = i;
    }

    // If no solution is found, return an empty array
    return [];
}



// Example usage:
const nums = [3, 2, 4];

const target = 6;
console.log(twoSum(nums, target));