// javascript에서 다룰 수 있는 수의 범위
// -9007199254740991 ~ 9007199254740991
-Math.pow(2, 53) + 1 === Number.MIN_SAFE_INTEGER;
Math.pow(2, 53) - 1 === Number.MAX_SAFE_INTEGER;

// BigInt
// -2^53이하 2^53이상의 수를 다룰 때 사용 
const a = 2n ** 53n; // 9007199254740992n
// integer와 혼용해서 연산할 수 없다.
a + 1n // 가능
a + 1 // 불가능

// 최댓값/최솟값 (인자 갯수 유동적)
Math.max(10, 20, 6); //  20
Math.min(10, 20, 6); // 6

const arr = [1, 2, 3];
Math.max(...arr); // 3

// 제곱
Math.pow(2, 3); // 2^3

// 제곱근
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414...

// 절대값
Math.abs(-123); // 123

// 반올림 (언제나 정수 반환)
Math.round(20.49); //  20
Math.round(20.5); //  21
Math.round(-20.5); // -20

// 내림 (언제나 정수 반환)
Math.floor(45.05); // 45
Math.floor(4); // 4
Math.floor(-45.05); // -46

// 올림 (언제나 정수 반환)
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-0.95); // -0


// 소수점 자릿수 지정(자르기)
const num = 1.12345;
num.toFixed(3); // "1.123" string타입임에 유의
num.toFixed(0); // "1"
num.toFixed(7); // "1.1234500"
