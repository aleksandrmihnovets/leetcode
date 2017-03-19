function trailingZeroes(n) {
    let res = 0;
    while (n > 0) {
        n /= 5;
        res += Math.floor(n);
    }
    return res;
}