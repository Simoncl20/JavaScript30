/**
 * @typedef {(x: number) => number} F
 */

/**
 * Composes an array of functions from right to left.
 * @param {F[]} fns
 * @returns {F}
 */
const compose = (fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x)
