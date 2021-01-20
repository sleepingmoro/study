/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 좀 더 간단한 풀이
  const len = matrix.length;
  for (let j = 0; j < len; j++) {
    const arr = matrix[j];
    for (let i = 0; i < len; i++) {
      const shifted = arr.shift();
      matrix[i].splice(matrix[i].length - j, 0, shifted);
    }
  }
};

var rotate = function (matrix) {
  // 하나하나 자리바꾸기
  const len = matrix.length;

  // 하나의 요소는 4번만 이동하면 된다.
  // 옮겨야 하는 요소는 0:0~len-1, 1:1~len-2 2~len-3 ... n=len-n+1 일때까지
  for (let i = 0; i < len - i - 1; i++) {
    for (let j = i; j < len - i - 1; j++) {
      console.log("옮길 요소", i, j, matrix[i][j]);
      let index1 = i;
      let index2 = j;
      let temp = matrix[index1][index2];
      for (let k = 0; k < 4; k++) {
        let temp2 = temp;
        temp = matrix[index2][len - index1 - 1];
        // 바꾸기
        matrix[index2].splice(len - index1 - 1, 1, temp2);
        let tempIndex = index1;
        index1 = index2;
        index2 = len - tempIndex - 1;
      }
    }
  }
};

/**

굉장히 힘든 문제였다.

하나하나 자리 바꾸는 방식부터 살펴보자면 3중 for문을 사용하고 있는데,
for문들은 사실 반복 횟수를 제한해주는 역할이라
중첩을 줄인다고 해서 효율이 올라가진 않기 때문에
효율 측면에서 그렇게 나쁘지는 않을것 같기는 하다.
다만 구현이 너무 헷갈리고 힘들었기 때문에
실전에서는 이렇게 할 수 있을까 하는 의문이 든다.

사실 문제에 제시된 이미지처럼 실제로 하나씩 옮겨야한다는 생각에 갇혀서
어렵게 풀었는데,
Input Output을 자세히 들여다보니 좀 더 쉬운 방법이 보였다.

[[1,2,3],[4,5,6],[7,8,9]] => [[7,4,1],[8,5,2],[9,6,3]]
matrix를 반복을 돌면서 하나씩 각 배열에 흩어주면 된다.
예를 들면 matrix[0]의 1, 2, 3은 
각각 matrix[0], matrix[1], matrix[2]의 맨 뒤에 넣어주면 된다.

matrix[0] = [1,2,3]
[[1],[2],[3]]

matrix[1] = [4,5,6]
[[4,1],[5,2],[6,3]]

matrix[2] = [7,8,9]
[[7,4,1],[8,5,2],[9,6,3]]

다만 실제로는 이렇게 깔끔하게 비워진 배열에서 시작하는게 아니기때문에
index에만 살짝 주의하면 될 듯 하다.
 */
