// for..of와 for..in의 차이점과 유의할 점

// for..of는 Array, Map, Set, String 등 반복가능한 객체에 대해 사용가능하다.
var arr = ['a', 'b', 'c'];
for (let i of arr) {
    console.log(i); // 'a', 'b', 'c'
}

// for..in은 객체의 반복을 위해 만들어진 메서드이며,
// 객체의 속성을 반환한다.
// *** 배열의 인덱스 반환용으로 만들어진 메서드가 아님에 주의!!
// 배열에 사용해도 i는 string 타입으로 반환된다.
// 또한 순서를 보장하지 않기 때문에 배열에서는 for, forEach, for..of를 사용하는 것이 좋다.
for (let i in arr) {
    console.log(i, typeof i); // '0', 'string'
}
