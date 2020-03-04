function solution(heights) {
    // 6 9 7 5 4  =>  0 0 2 2 4
    // 첫번째 탑이 쏜 신호는 아무도 받지 못한다. 0을 담고 시작한다.
    const answer = [0];
    // 두번째 탑(index 1)부터 시작한다.
    for (var sendT = 1 ; sendT < heights.length ; sendT++) {
        let isFound = false;
        // 현재 탑의 왼쪽부터 첫번째까지 반복을 돌면서
        for (var receiveT = sendT - 1 ; receiveT !== 0 ; receiveT-- ) {
            // 이미 찾은 상태면 반복을 빠져나간다
            if (isFound) break;
            // 더 높은 탑을 찾으면 몇번째인지 담고 found를 true로 바꾼다
            if (heights[receiveT] > heights[sendT]) { 
                answer.push(receiveT+1);
                isFound = true;
             }
        }
        // 반복이 끝났는데도 더 높은 탑이 없다면 0을 담는다
        if (!isFound) answer.push(0);
    }
    return answer;
}