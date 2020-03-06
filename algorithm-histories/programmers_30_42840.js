function solution(answers) {
    const first = [1, 2, 3, 4, 5]
    const second = [2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;
    answers.map((q, i) => {
        if(q === first[i%5]) score1++;
        if(q === second[i%8]) score2++;
        if(q === third[i%10]) score3++;
    });
    
    const result = [score1, score2, score3];
    const final = []
    const sortedResult = result.sort((a, b) => b-a );
    const maxScore = sortedResult[0];
    if (maxScore === score1) final.push(1) ;
    if (maxScore === score2) final.push(2) ;
    if (maxScore === score3) final.push(3) ;

    return final;
}