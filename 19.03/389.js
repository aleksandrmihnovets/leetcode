function findTheDifference(s, t) {
    const
        tChars = t.split(''),
        len = s.length;
    let i;
    for (i = 0; i < len; ++i) {
        const
            ch = s[i],
            index = tChars.indexOf(ch);
        if (index !== -1) {
            tChars.splice(index, 1);
        }
    }
    return tChars[0];
}