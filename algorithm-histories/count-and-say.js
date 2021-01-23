// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let str = "1";
  for (let j = 1; j < n; j++) {
    const splitted = split(str);
    let temp = "";
    for (let i = 0; i < splitted.length; i++) {
      temp += count(splitted[i]);
    }
    str = temp;
    temp = "";
  }

  return str;
};

// 문자열을 같은 문자 배열로 쪼개주는 함수.
// "1211" => ["1", "2", "11"]
const split = (str) => {
  const arr = [str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1][0]) {
      arr[arr.length - 1] = `${arr[arr.length - 1]}${str[i]}`;
    } else {
      arr.push(str[i]);
    }
  }
  return arr;
};

// 문자열을 세주는 함수.
// "111" => "31"
const count = (str) => {
  return `${str.length}${str[0]}`;
};

/**
"1"로 시작해서 n번만큼 숫자를 세어 나가는 문제다.
문자열을 같은 문자끼리 몇 개 있는지 쪼개주는 함수와
세어주는 함수로 분리하여 구현했다.

복잡한 기능을 하는 문제의 경우엔
이렇게 필요할 것 같은 함수부터 조각조각 구현해 나가는 방식이 좋은 것 같다.
 */
