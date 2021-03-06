/** 
 * for문은 도중에 아이템을 제거해버리면 제대로 돌지 않는다.
 */
const arr = [1, 2, 3, 4, 5];
for(let item of arr){
    arr.shift();
    console.log(arr);
    console.log(item); // 1 3 5
}
/**
 * for of도 내부적으로는 for(let i = 0 ; i < arr.length ; i++) 이런식으로 동작하기 때문에,
 * 당연하게도 도중에 배열 아이템이 사라져버리면 배열 길이만큼 반복하지 않는다.
 * 이렇게 놓고 보면 당연한데도, 왜 내가 생각한 횟수만큼 돌지 않는지 고민했다. 멍청하게 헤매지 말자.
 * 
 * 원본 배열을 복제한 배열로 작업을 하던가, 
 * splice, pop, shift처럼 아이템을 삭제하는 대신
 * 값이 없음을 표현하는 값을 대입해서 사용하자.
 */

 /**
  * for of와 for in의 차이
  */
const arr2 = ['a', 'b', 'c'];
for(const item in arr2){
    console.log('in', item); // 0 1 2
}
for(const item of arr2){
    console.log('of', item); // a b c
}
/**
 * for in에서의 item은 배열의 index다.
 * for of에서의 item은 배열의 객체다.
 */
