/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length;
  for (let i = 0; i < len - 1; i++) {
    const shifted = s.shift(); // 맨 앞 값 꺼내기
    s.splice(len - i - 1, 0, shifted);
  }
  // s.reverse();
};

/**
 * reverse 함수는 원본배열을 변경하는 메서드이므로
 * s.reverse()하면 끝이긴 하지만..
 *
 * for문으로도 풀어보았다.
 * 맨 앞 값을 꺼내서 뒤에 붙여넣는 방식이다.
 * 맨 마지막 회차에서는 제자리에서 뗐다 붙였다 하게 되므로 할 필요 없기 때문에
 * len-1만큼만 반복을 돌았다.
 */
