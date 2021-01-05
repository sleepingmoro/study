arr = [1, 2, 3];

/**
 * 원본 배열이 변경되는 방식
 */

// 배열 맨 뒤에 값 추가 & 배열 길이 반환
const pushed = arr.push(0);
// pushed = 4
// arr = [1, 2, 3, 0]

// 배열 맨 앞에 값 추가 & 배열 길이 반환
const unshifted = arr.unshift(0);
// unshifted = 4
// arr = [0, 1, 2, 3]

// 배열 맨 끝 값 제거 & 제거된 요소 반환
const popped = arr.pop();
// popped = 3
// arr = [1, 2]

// 배열 맨 앞 값 제거 & 제거된 요소 반환
const shifted = arr.shift();
// shifted = 1
// arr = [2, 3]
