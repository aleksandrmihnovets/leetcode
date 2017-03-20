function reverseString(s) {
    const reversed = [];
    let i = s.length - 1;
    for (i; i >= 0; --i) {
        reversed.push(s[i]);
    }
    return reversed.join('');
}