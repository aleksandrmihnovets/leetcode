function findComplement(num) {
    const rev = num.toString(2).split('').map(bit => bit === '0' ? '1' : '0').join('');
    return parseInt(rev, 2);
}