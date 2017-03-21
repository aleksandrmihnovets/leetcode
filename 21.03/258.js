var addDigits = function(num) {
    return num === 0 ? 0 : num - 9 * Math.floor((num - 1) / 9);
};