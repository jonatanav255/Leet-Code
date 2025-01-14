// 2011. Final Value of Variable After Performing Operations
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let X = 0
  for (let operation of operations) {
    if (operation.includes('+')) {
      X += 1
    } else {
      X -= 1
    }
  }
  return X
}

const operations = ['--X', 'X++', 'X++']
// Output: 1
console.log(finalValueAfterOperations(operations))
