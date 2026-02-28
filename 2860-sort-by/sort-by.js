/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => {
        const resultA = fn(a);
        const resultB = fn(b);

        return resultA - resultB
    })
};