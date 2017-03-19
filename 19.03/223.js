const max = (a, b) => a > b ? a : b;
const min = (a, b) => a < b ? a : b;

function computeArea(A, B, C, D, E, F, G, H) {
    const
        sqr1 = (C - A) * (D - B),
        sqr2 = (G - E) * (H - F),
        left = max(A, E),
        right = min(C, G),
        bottom = max(B, F),
        top = min(D, H);

    let commonArea;
    if (right >= left && top >= bottom) {
        commonArea = (right - left) * (top - bottom);
    }
    else {
        commonArea = 0;
    }

    return sqr1 + sqr2 - commonArea;
}