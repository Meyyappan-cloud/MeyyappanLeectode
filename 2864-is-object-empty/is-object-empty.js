/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    const length = Object.keys(obj).length;
    if (length > 0) {
        return false
    } else {
        return true
    }
};