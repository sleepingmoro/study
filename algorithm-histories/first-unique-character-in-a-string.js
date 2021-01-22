/**
 * @param {string} s
 * @return {number}
 */
// 첫 풀이
var firstUniqChar = function (s) {
  const alreadyChecked = [];
  for (let i = 0; i < s.length; i++) {
    if (alreadyChecked.includes(s[i])) continue;
    let count = 0;
    const filtered = [...s].filter((item) => {
      if (count > 1) return;
      if (item === s[i]) {
        count++;
        return true;
      }
    });
    if (filtered.length === 1) return i;
    alreadyChecked.push(s[i]);
  }
  return -1;
};
/**
그냥 string 길이만큼 돌면서 filter로 어떤 문자가 1개뿐이면 리턴하도록 구현했다.
대신 이미 체크했던 문자인지 alreadyChecked로 확인하고,
filter에서도 2번 이상은 찾지 않도록 제한 조건을 주었다.
간단한 문제인데도 런타임이나 메모리가 꽤 나와서 다시 풀었다.
*/

// 최종 풀이
var firstUniqChar = function (s) {
  const uniqArr = Array.from(new Set(s));
  for (let i = 0; i < uniqArr.length; i++) {
    const index = s.indexOf(uniqArr[i]);
    const lastIndex = s.lastIndexOf(uniqArr[i]);
    if (index === lastIndex) return index;
  }
  return -1;
};

/**
주어진 string을 유니크한 문자열 배열로 만든 후,
유니크 배열로 반복을 돌면서 index와 lastIndex를 비교해
둘이 같다면 하나뿐인 것이므로 index를 리턴하도록 했다.
사실 이러면 index를 두번씩 찾아봐야 하므로.. 좀 비효율일거라 생각했는데
런타임이나 메모리는 훨씬 개선되어서 이 풀이로 제출했다.
 */
