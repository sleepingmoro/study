// 체육복
function solution(n, lost, reserve) {
    // 진짜 남는 여벌이 있는 사람의 배열
    // reserve에 lost에 있는 숫자가 있으면 제외해야 함
    const hasR = reserve.filter((r) => !lost.includes(r) )
    
    // 반대로 잃어버렸지만 여벌이 있는 사람을 제외한다.
    const lostR = lost.filter((l) => !reserve.includes(l))
    console.log('진짜 : ', hasR, lostR) // [23] [14] / has[35] lost[124] 
    
    // 앞사람이 뒷사람에게 빌려준다.
    for(let h of hasR) {//4
       if(lostR.includes(h+1)) {//
           if(h>1 && lostR.includes(h-1) && hasR.includes(h+2)) break; // 앞사람도 잃어버렸고 뒷뒷사람이 갖고있으면 빌려주면 안됨
              lostR[lostR.indexOf(h+1)] = 0; // 잃어버린 사람 배열에서 제거
              hasR[hasR.indexOf(h)] = 0; // 준 사람도 제거
       }
    }
    console.log('앞->뒤 : ',hasR, lostR) // [2] [1] / lost[124] has[35]
    
    // 뒷사람이 앞사람에게 빌려준다.
    for(let h of hasR) {//3
        console.log(hasR[0], hasR.length)
       if(lostR.includes(h-1) && h>1) {//2
          // if(lostR.includes(h+1)) { // 뒷사람도 잃어버렸으면 빌려주면 안됨
           lostR[lostR.indexOf(h-1)] = 0; // 잃어버린 사람 배열에서 제거
           hasR[hasR.indexOf(h)] = 0; // 준 사람도 제거
          // }
       }
    }
    console.log('뒤->앞 : ',hasR, lostR)

    const result = lostR.filter((l) => l > 0)

    return n - result.length;
}

/**
 * 
 * 진짜 여벌이 있는 경우(여벌이 있고 잃어버리지 않은 경우)를 찾고,
 * 잃어버렸지만 여벌이 있는 경우를 먼저 제외한다.
 * 
 * 그 후 앞사람이 뒷사람에게 빌려주고, 뒷사람이 앞사람에게 빌려주면 된다.
 * 
 * 다만 조건이 더 있어야 한다. 테스트케이스가 충분하지 않아 많이 헤맸다.
 * 
 * 유의할 케이스는
 * 여벌: [2, 4] 없음: [1, 3] 같은 경우다.
 * 이 경우 2번이 3번에게 빌려줘버리면 1번은 빌릴수 없게 된다.
 * 그러므로... 앞 사람도 없고 뒷뒷사람은 가지고 있는 경우, 빌려주지 말아야 한다.
 * 
 */