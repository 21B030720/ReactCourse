/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let result = [];
    let miniArray = [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++) {
        if(counter === size) {
            counter = 1;
            result.push(miniArray);
            miniArray = [arr[i]];
        } else {
            counter++;
            miniArray.push(arr[i]);
        }
    }
    if(miniArray.length !== 0) {
        result.push(miniArray);
    }
    return result
};
