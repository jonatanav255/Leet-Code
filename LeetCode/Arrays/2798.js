// 2798. Number of Employees Who Met the Target

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let res = 0
  for (hour of hours) {
    if (hour <= target) {
      res += 1
    }
  }

  return res
}
const hours = [0, 1, 2, 3, 4]
const target = 2

// Output: 3
// numberOfEmployeesWhoMetTarget(hours, target)
console.log(numberOfEmployeesWhoMetTarget(hours, target))
