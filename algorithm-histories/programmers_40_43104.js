function solution(N) {

    const fibo = [1, 1]
    for(let i = 0; i < N-2 ; i++){
      const num = fibo[fibo.length - 1] + fibo[fibo.length -2]
      fibo.push(num);
    }

    console.log(fibo);
    const length = fibo.length;
    // const answer = (fibo[length-1] + fibo[length-2])*2 + (fibo[length-2] + fibo[length-3])*2;
    /**
    a + b = c
    2c + 2b + 2b + 2a
    2(a+b+b+c)
    2(c+b+c)
    2(b + 2c)
    2b + 4c
    */
    const answer = fibo[length-1]*4 + fibo[length-2]*2
    console.log(answer);
    
    return answer;
}