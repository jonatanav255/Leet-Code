// 1672. Richest Customer Wealth

/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var maximumWealth = function (accounts) {
//   let maxWealth = 0

//   for (let account of accounts) {
//     let wealthCustomer = 0
//     for (let num of account) {
//       wealthCustomer += num
//     }
//     if (wealthCustomer > maxWealth) {
//       maxWealth = wealthCustomer
//     }
//   }
//   return maxWealth
// }

var maximumWealth = function (accounts) {
  let best = 0

  for (let a of accounts) {
    best = Math.max(
      best,
      a.reduce((sum, value) => sum + value,
       0)
    )
  }

  return best
}

const accounts = [
  [1, 2, 3],
  [3, 2, 1]
]
console.log(maximumWealth(accounts))
