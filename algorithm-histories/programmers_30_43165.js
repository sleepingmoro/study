// 타겟 넘버
function solution(numbers, target) {
    var answer = 0;
    const len = numbers.length;
    
    add(0)
    function add(n) {
        if(n === len) {
            const result = numbers.reduce((a, b) => {
                return a+b
            }, 0)
            if(result === target) answer++;
            // console.log(numbers, result)
            
            return;
        }
        add(n+1)
        numbers[n] *= -1
        add(n+1)
    }
    return answer;
}

/**
 * 재귀로 푸는것이 가장 쉬운 방법인 듯 하다.
 * 재귀를 활용하여 모든 가짓수로 함수를 실행시킨다.
 * 한번 싪행될때마다 함수가 2번씩 호출된다. 1 - 2 - 4 - 8 ...
 * 결국 배열 길이가 5일때 2^5번만큼 실행되고,
 * 배열 길이와 n이 같아졌을 때 최종 합산이 나오게 된다.
 * 그때 값이 목표하는 값과 같다면 answer++를 해준다.
 */