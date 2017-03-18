var findPeakElement = function(nums) {
    var len = nums.length;
    for (var i = 0; i < len; ++i) {
        var num = nums[i];
        if (i === 0) {
            if (len === 1) {
                return 0;
            }
            if (num > nums[i + 1]) {
                return i;
            }
        }
        else if (i === len - 1) {
            if (num > nums[i - 1]) {
                return i;
            }
        }
        else {
            if (num > nums[i - 1] && num > nums[i + 1]) {
                return i;
            }
        }
    }
};
