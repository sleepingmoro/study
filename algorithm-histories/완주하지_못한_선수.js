function solution(participant, completion) {
    
    for (const item of completion){
       participant.splice(participant.indexOf(item),1); 
    }

    return participant[0];
}