/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let total = init

  for (const element of nums) {
    total = fn(total, element)
  }

  return total
}
