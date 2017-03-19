Array.prototype.swap = function(x, y) {
    const b = this[x];
    this[x] = this[y];
    this[y] = b;
    return this;
};

function firstMissingPositive(nums) {
    const len = nums.length;
    let i;
    for (i = 0; i < len; ++i) {
        let num = nums[i];
        while (num > 0 && nums[num - 1] != num) {
            nums.swap(i, num - 1);
            num = nums[i];
        }
    }

    for (i = 0; ; ++i) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }
}