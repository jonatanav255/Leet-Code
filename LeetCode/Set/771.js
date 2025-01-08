// 771. Jewels and Stones

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0
  const jewelsValues = new Set(jewels)
  for (const stone of stones) {
    if (jewelsValues.has(stone)) {
      count++
    }
  }

  return count
}

let jewels = 'aA'
let stones = 'aAAbbbb'

 console.log(numJewelsInStones(jewels,stones))
// numJewelsInStones(jewels, stones)
