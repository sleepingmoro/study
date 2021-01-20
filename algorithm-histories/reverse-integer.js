/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const absReverseInt = parseInt(
    [...Math.abs(x).toString()].reverse().join("")
  );
  console.log(
    `reverse한 결과가 ${-Math.pow(2, 31)}보다 작거나 
    ${Math.pow(2, 31) - 1}보다 크면 0`
  );
  if (absReverseInt < -Math.pow(2, 31) || absReverseInt > Math.pow(2, 31) - 1) {
    return 0;
  }

  return x < 0 ? -absReverseInt : absReverseInt;
};

/**
 * 포인트는 x를 "뒤집은 후"의 값이 -2^31 ~ 2^31 - 1 을 벗어나는 경우 0을 리턴하는 것이다.
 *
 * 실제로 javascript에서 핸들링 가능한 수는 -2^53 ~ 2^53 -1 이라고 한다.
 * (tip. 외울 필요 없이, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER로 접근 가능하다.)
 * 그러므로 범위 내라면 integer로 계산 가능하기 때문에,
 * Plus One 문제처럼 항상 string으로 다룰 필요는 없다.
 *
 * 범위값은 Math.pow함수를 사용해서 구하고, -를 제거하기 위해 Math.abs를 사용하면 간단하다.
 */
