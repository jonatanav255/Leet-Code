/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies)

  return candies.map(candy => candy + extraCandies >= maxCandies)
}
const candies = [2, 3, 5, 1, 3]
const extraCandies = 3

console.log(kidsWithCandies(candies,extraCandies))
// kidsWithCandies(candies, extraCandies)

// Output: [true,true,true,false,true]
