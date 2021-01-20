/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < len / 2; i++) {
    [s[i], s[len - i - 1]] = [s[len - i - 1], s[i]];
  }
};

var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < len - 1; i++) {
    const shifted = s.shift(); // 맨 앞 값 꺼내기
    s.splice(len - i - 1, 0, shifted);
  }
};

/**
 * reverse 함수는 원본배열을 변경하는 메서드이므로
 * s.reverse()하면 끝이긴 하지만..
 *
 * for문으로도 풀어보았다.
 * 맨 앞 값을 꺼내서 뒤에 붙여넣는 방식이다.
 * 맨 마지막 회차에서는 제자리에서 뗐다 붙였다 하게 되므로 할 필요 없기 때문에
 * len-1만큼만 반복을 돌았다.
 * 
 * 한번에 바꿔치기 하는 방식으로 개선하면
 * 반복을 배열 길이의 반만큼만 돌 수도 있다!
 * [a, b] = [1, 2]
 * 한번에 여러 변수에 여러 값을 할당하는 방식을 사용하면 된다.
 * 차례로 실행되는 것이 아니므로 값 변경에 신경쓰지 않아도 되어 편리하다.
 */
