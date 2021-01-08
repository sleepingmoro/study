// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const arr = Array.from(new Set(nums));
    return nums.length > arr.length;
};

/**
 * 배열 요소 중 중복이 있으면 true, 중복이 없으면 false 리턴하는 문제
 * 그냥 중복제거 후 길이비교하면 된다.
 */
