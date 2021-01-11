// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 반복문은 최대로 돌아도 주어진 배열 길이의 반만큼만 돌면 된다.
    const count = Math.floor(nums.length/2);
    
    for(let i = 0; i < count; i++){
        const item = nums.shift();
        const index = nums.findIndex((n)=> n===item);
        if(index > -1) {
            nums.splice(index, 1);    
        } else {
            // 짝을 찾지 못한 경우 해당 요소가 single number다.
            return item;
        }        
    }
    // 반복문이 끝까지 돈 경우 배열에는 요소가 하나만 남아있고,
    // 해당 요소가 single number다.
    return nums[0];
};
