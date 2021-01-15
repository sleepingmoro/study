// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/567/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target - nums[i] === nums[j]) return [i, j];
    }
  }
};

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const targetNum = target - nums[i];
    const index = nums.lastIndexOf(targetNum);
    if (i !== index && index !== -1) return [i, index];
  }
};

/**
 * 이중 for문을 피해보려다 결국 lastIndexOf를 써서 더 안좋은 풀이가 되었다.
 * 이렇게 풀면 이해하기도 어렵고, 놓친 부분도 찾기 어려울 것 같다.
 *
 * 추가로.. for..in으로 구현하려다 for(let index in arr)에서
 * index가 string으로 반환되는걸 처음 알았다.
 * 찾아보니 원래 객체의 반복을 위해 만들어진 메서드라, 배열 반복에서는 사용하지 말라고 한다.
 * 순차 반복도 보장되지 않는다고 하니 조심해서 사용해야겠다.
 *
 * 그래서 좀 더 정석적인 이중 for문으로 다시 풀었다.
 * 이해하기도 훨씬 쉽고, 조건문도 간단하다!
 *
 */
