// 인덱스를 찾아 반환하는 함수들

const arr = [2, 5, 9, 2];

// findIndex
// 주어진 판별함수를 만족하는 첫번째 요소의 인덱스를 반환
// 없으면 -1
arr.findIndex((item) => item > 3); // 1
arr.findIndex((item) => item > 10); // -1

// indexOf
// 정해진 요소의 첫번째 인덱스를 반환
// 없으면 -1
arr.indexOf(2) // 0
arr.indexOf(10) // -1
// 두 번째 인자로 start index를 지정할 수 있다.
arr.indexOf(2, 1) // 3

// lastIndexOf
// 정해진 요소를 배열 맨 뒤에서부터 찾아 인덱스를 반환
// 없으면 -1
arr.lastIndexOf(2) // 3
arr.indexOf(10) // -1
// 두 번째 인자로 start index를 지정할 수 있다.
arr.indexOf(2, 2) // 0
