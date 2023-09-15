/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init;
    let obj = {
        increment() {
            current += 1;
            return current;
        },
        decrement() {
            current -= 1;
            return current;
        },
        reset() {
            current = init;
            return current;
        }
    }
    return obj
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */