// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/564/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    for(const i in prices) {
        console.log('오늘의 가격', prices[i]);
        if (i !== 0 && prices[i-1] < prices[i]) {
            profit += prices[i] - prices[i-1];
            console.log('판매함', prices[i]);
            console.log('이윤', prices[i] - prices[i-1])
        }
    }
    console.log('profit', profit)
    return profit;
};

/**
 * 푸는 것보다 풀이 방법을 생각하는게 더 오래 걸렸다.
 * 
 * 진짜 주식처럼 생각해서 살지 말지를 결정하는 것이 어렵겠다고 생각하고 있었는데
 * 날짜별 가격을 모두 알고, 살지말지 당시에 판단하지 않아도 되므로 사는 것에는 신경쓸 필요없다.
 * 또 자본금이 주어지는 것도 아니기때문에, 얼마나 살지 같은것도 생각할 필요 없다.
 * 
 * 그냥 다음날 더 비싸면 전날에 샀다고 가정하고 이윤만 계산하면 된다!
 * 
 * [7,1,5,3,6,4]
 * 7 : 첫날이라 팔 수 없으므로 패스함.
 * 1 : 전날보다 쌈. 패스
 * 5 : 전날보다 비싸므로 1에 샀다고 가정하고 이윤은 4
 * 3 : 전날보다 쌈. 패스
 * 6 : 전날보다 비싸므로 3에 샀다고 가정하고 이윤은 3
 * 4 : 전날보다 쌈. 패스
 * 
 */
