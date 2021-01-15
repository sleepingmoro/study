// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/769/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let boxArr = [[], [], []];
  for (let i = 0; i < 9; i++) {
    // test rows
    if (!isUniq(board[i].filter((item) => item !== "."))) return false;

    // make column Array
    const columnArr = [];
    for (let j = 0; j < 9; j++) {
      const item = board[j][i];
      if (item === ".") continue;
      if (board[j][i] !== ".") columnArr.push(item);

      // make box Array
      if (j < 3) boxArr[0].push(item);
      if (2 < j && j < 6) boxArr[1].push(item);
      if (5 < j && j < 9) boxArr[2].push(item);
    }

    // test columns
    if (!isUniq(columnArr)) return false;
    // test boxes
    if (i % 3 === 2) {
      if (!isUniq(boxArr[0]) || !isUniq(boxArr[1]) || !isUniq(boxArr[2]))
        return false;
      boxArr = [[], [], []];
    }
  }

  return true;
};

var isUniq = (noDotArr) => {
  const noDup = Array.from(new Set(noDotArr));
  return noDotArr.length === noDup.length;
};

/**
 * 2차원 배열, 중복 for문에서 내가 얼마나 혼란스러워하는지 알 수 있는 문제였다.
 * 그래도 시작하자마자 inUniq, removeDot 메서드를 만들고, 
 * row, column, box 순서대로 차근차근 찍어보면서 푸니
 * 크게 막히지 않고 풀 수 있었다.
 */

// 코드 정리 및 축약 전 버전
var isValidSudoku = function (board) {
  // test rows
  for (let i = 0; i < 9; i++) {
    const uniq = isUniq(removeDot(board[i]));
    // console.log(uniq)
    if (!uniq) return false;
  }

  // test columns
  for (let i = 0; i < 9; i++) {
    const columnArr = [];
    for (let j = 0; j < 9; j++) {
      // console.log(j, i)
      if (board[j][i] !== ".") columnArr.push(board[j][i]);
    }
    // console.log(columnArr)
    // console.log(isUniq(columnArr))
    if (!isUniq(columnArr)) return false;
  }

  // test boxes
  let boxArr1 = [];
  let boxArr2 = [];
  let boxArr3 = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // console.log(j, i)
      const item = board[j][i];
      if (item === ".") continue;
      if (j < 3) boxArr1.push(item);
      if (2 < j && j < 6) boxArr2.push(item);
      if (5 < j && j < 9) boxArr3.push(item);
    }
    if (i % 3 === 2) {
      console.log(111, boxArr1, boxArr2, boxArr3);
      console.log("========");
      console.log("첫째줄", boxArr1);
      if (!isUniq(boxArr1)) return false;
      boxArr1 = [];

      console.log("========");
      console.log("둘째줄", boxArr2);
      if (!isUniq(boxArr2)) return false;
      boxArr2 = [];

      console.log("========");
      console.log("셋째줄", boxArr3);
      if (!isUniq(boxArr3)) return false;
      boxArr3 = [];
    }
  }

  return true;
};

var isUniq = (noDotArr) => {
  const noDup = Array.from(new Set(noDotArr));
  return noDotArr.length === noDup.length;
};

var removeDot = (arr) => {
  const noDot = arr.filter((item) => item !== ".");
  return noDot;
};
