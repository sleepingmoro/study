// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const answer = [];
    // 더 짧은 배열로 반복을 돌면 좋을 것 같다.
    let short = nums1;
    let long = nums2;
    if (nums1.length > nums2.length){
        short = nums2;
        long = nums1;
    }
    for(let n1 of short) {
        const index = long.indexOf(n1)
        if(index > -1) {
            const deleted = long.splice(index, 1);
            answer.push(deleted[0])
        }
    }
    return answer;
};
