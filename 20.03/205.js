function isIsomorphic(s, t) {
    const mapS = {}, mapT = {}, lenS = s.length, lenT = t.length;
    let i;
    if (lenS !== lenT) {
        return false;
    }
    for (i = 0; i < lenS; ++i) {
        const charS = s[i], charT = t[i];
        if (!mapS[charS] && !mapT[charT]) {
            mapS[charS] = charT;
            mapT[charT] = charS;
        }
        else {
            if (mapS[charS] !== charT || mapT[charT] !== charS)
                return false;
        }
    }
    return true;
}

console.log(isIsomorphic('ab', 'aa'));