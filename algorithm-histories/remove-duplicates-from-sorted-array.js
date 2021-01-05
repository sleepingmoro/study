// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const arr = Array.from(new Set(nums));
  nums.splice(0, arr.length, ...arr);

  return arr.length;
};

/**
 * 처음엔 return [...(new Set(nums))].length 라고 했다가 틀려서 다시 읽어보니
 * 단순히 중복을 제거하고 반환하는 것이 아니라
 * "Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well."
 * nums는 참조로 전달되므로 nums자체를 변경해야 한다고 한다.
 *
 * 그래서 splice로 변경했다.
 * nums.splice(0, nums.length, ...new Set(nums)) 라고 해도 되지만
 * 가독성 때문에 굳이 자름.
 *
 * 빈 배열이 들어와도 핸들링이 되기 때문에
 * if (nums.length < 1) return 0; 같은 코드는 필요없다.
 */
