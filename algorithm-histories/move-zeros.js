// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i - count] === 0) {
      nums.splice(i - count, 1);
      count++;
      nums.push(0);
    }
  }
};

/**
 * 배열의 0을 모두 찾아 맨 뒤로 옮기는 문제다.
 *
 * 처음엔 sort해서 0부분만 잘라 뒤에 붙이려고 했는데,
 * 그러면 0이 아닌 숫자도 순서가 바뀌어서 안됨.
 *
 * 반복을 돌면서 0이면 잘라내 맨뒤에 붙이는 방법을 사용했으나,
 * arr = [0, 0, 1] 같은 경우
 * 0회차 반복 : arr[0]을 잘라 맨뒤에 붙임 => [0, 1, 0]
 * 1회차 반복 : arr[1]은 0이 아니므로 아무것도 하지 않음
 * 2회차 반복 : arr[2]를 잘라 맨뒤에 붙임 => [0, 1, 0]
 *
 * 이렇게 잘라내면서 순서가 바뀌어버려 지나간 요소에 대해 확인하지 못한다.
 * 그러므로 0을 잘라냈다면 다시 해당 순서부터 시작해야 한다.
 * 그래서 count라는 변수를 별도로 두고 0 갯수만큼 index를 빼주게 하였다.
 *
 * 다만 이렇게 하는 경우 0이 많을수록 필요 이상으로 반복을 돌게 되므로
 * 반복 횟수의 최적화가 필요할 것 같다.
 *
 */
