function solution(participant, completion) {
    
    // for (const item of completion){
    //    participant.splice(participant.indexOf(item),1); 
    // }

    // return participant[0];
   /**
    * 기존의 풀이는 효율성 테스트를 통과하지 못했다.
    * for문 안에서 indexOf를 사용했기 때문에 N^2이 된다.
    */

    // 개선된 코드
    // sort를 사용해서 달라지는 값을 리턴하면 된다.
    // 완주하지 못한 선수가 한명이라는 점을 놓쳐서 생각하지 못했다.
    const sP = participant.sort();
    const sC = completion.sort();
    
    for (let i = 0 ; i < sP.length ; i++) {
        if (sP[i] !== sC[i]){
            return sP[i];
        }
    }
}