/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    d = {};
    for(let i = 0; i < arr1.length; i++) {
        d[arr1[i]["id"]] = i;
    }
    for(let i = 0; i < arr2.length; i++) {
        if(d[arr2[i]["id"]] === undefined) {
            arr1.push(arr2[i]);
        } else {
            for(let key in arr2[i]) {
                arr1[d[arr2[i]["id"]]][key] = arr2[i][key];
            }
        }
    }
    arr1.sort(function(a, b) {
        return a['id'] - b['id'];
    })
    return arr1;
};