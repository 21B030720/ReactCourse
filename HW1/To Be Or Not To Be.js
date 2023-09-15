/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let result = "Not Equal"
    let logic = {
        toBe(val2) {
            if(val === val2) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe(val2) {
            if(val !== val2) {
                return true;
            }
            throw new Error("Equal");
        }
    }
    
    return logic;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */