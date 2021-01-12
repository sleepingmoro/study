// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 1899 -> 뒤에서부터 반복을 돌며 9면 0, 아니면 +1한다. => 1900
    // 99 -> 뒤에서부터 반복을 돌며 9면 0으로 바꾸고, 마지막에도 9라면 1을 처음에 추가한다. => 100
    const last = digits.length - 1;
    for (let i in digits){
        if (digits[last-i] === 9) {
            digits[last-i] = 0;
        } else {
            digits[last-i] = digits[last-i] + 1;
            return digits;
        }
    }
    console.log(digits);
    // 반복이 끝까지 돌았다면, 9밖에 없는 경우다. 처음에 1을 추가해준다.
    digits.unshift(1);
    return digits;   
    
    /**
     * 처음엔 배열을 합쳐 숫자로 만든 후 1을 더하고 다시 배열로 쪼개는 방식을 사용하려고 했으나,
     * 주어지는 배열의 최대 길이는 100이므로 int의 범위를 넘어가서.. 아래 방식은 사용할 수 없다.
     * 
     * const num = parseInt(digits.join(''));
     * const plusStr = (num+1).toString();
     * const arr = plusStr.split('');
     * const numArr = arr.map((item) => parseInt(item));
     * while(digits.length > numArr.length){
     *     numArr.unshift(0);
     * }
     * return numArr;
     */
};
