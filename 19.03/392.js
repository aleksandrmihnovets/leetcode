function isSubsequence (s, t) {
    if (s === '')
        return true;

    let s_index = 0, s_len = s.length, curr_char = s[0], ch;
    for (ch of t)
        if (ch === curr_char) {
            s_index++;
            curr_char = s[s_index];
            if (s_index === s_len)
                return true;
        }
    return false;
}