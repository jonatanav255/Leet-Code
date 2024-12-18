function twoSum(nums, target) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            console.log(map)
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i)
        }
    }
    console.log(map)

}
// Example usage:
const nums = [3, 2, 4];

const target = 6;
console.log(twoSum(nums, target));
// twoSum(nums, target);