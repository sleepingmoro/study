/**
 * splice
 * 배열 기존 요소 삭제, 교체, 추가 (원본 변경)
 */
// arr.splice(인덱스, 교체할 갯수, [교체할 요소])
// 첫번째 인자 : 몇번째 인덱스에 넣을것인지
// 두번째 인자 : 0이면 교체하지 않고 추가만 함. 배열 길이보다 길면 인덱스 이후로 모두 제거
// 세번째 인자 : 교체할 요소가 없으면 삭제만 함
// 리턴값 : 제거된 요소들의 배열
arr.splice(1, 0, 100); // arr[1] 순서에, 아무것도 삭제하지 않고, 100을 추가
// arr = [1, 100, 2, 3];
// 리턴값 []

arr.splice(1, 2, 100); // arr[1]부터, 2개를 제거하고, 100을 추가
// arr = [1, 100];
// 리턴값 [2, 3];

arr.splice(1, 10); // arr[1]부터, 10개를 제거
// arr = [1];
// 리턴값 [2, 3];

/**
 * slice
 * 얕은 복사 후 새로운 배열로 반환함(원본 보존)
 */
arr = ["a", "b", "c", "d", "e"];
arr.slice(2);
// arr[2]부터 잘라서 반환함.
// ['c', 'd', 'e']

arr.slice(1, 3);
// arr[1] 이상 arr[3] 미만
// [b', 'c']