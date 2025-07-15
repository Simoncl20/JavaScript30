/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  return {
    init: init,
    value: init,
    decrement() {
      return --this.value
    },
    increment() {
      return ++this.value
    },
    reset() {
      return (this.value = this.init)
    },
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
