/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const len = haystack.length, needleLength = needle.length;
    if (needle.length === 0) {
        return 0;
    }
    for (var i = 0; i < len; ++i) {
        if (haystack.substr(i, needleLength) === needle) {
            return i;
        }
    }
    return -1;
};