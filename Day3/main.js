class Hamlet {
  #property

  constructor(property) {
    this.#property = property
  }

  toBe(value) {
    if (this.#property === value) {
      return true
    } else {
      throw new Error('Not Equal')
    }
  }

  notToBe(value) {
    if (this.#property !== value) {
      return true
    } else {
      throw new Error('Equal')
    }
  }
}

/**
 * @param {string} val
 * @return {Object}
 */

var expect = function (val) {
  return new Hamlet(val)
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
