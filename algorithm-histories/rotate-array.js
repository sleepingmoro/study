// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/646/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // for(let i = 0; i < k; i++) {
  //     const pop = nums.pop()
  //     nums.unshift(pop)
  // }
  // return nums;
  const spliced = nums.splice(nums.length - k, nums.length);
  console.log(spliced);
  nums.unshift(...spliced);
  return nums;
};

/**
 * 문제의 설명대로 반복을 돌며 하나씩 빼고 넣고 반복해도 되지만
 * splice를 사용해 한번에 잘라 붙이면 반복을 돌 필요 없다.
 */
