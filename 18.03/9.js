function isPalindrome(x) {
    let str = String(x), len = str.length, i = 0;
    for(i = 0; i < len / 2; ++i)
        if (str[i] !== str[len - i - 1])
            return false;
    return true;
}