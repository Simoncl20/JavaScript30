/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const filtered_array = arr.filter(fn)
  return filtered_array
}
