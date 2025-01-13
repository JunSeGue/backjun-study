/*
function solution(k, m, score) {
    let result = 0;
    score.sort((a,b) => b - a);
    for(let i=0; i<= score.length-m; i+=m) {
        let minValue = score[i+m-1];        
        result += minValue *m;
    }
    return result
}
*/
// code refactoring
function solution(k, m, score) {    
    // 1번 내림차순 정렬
    score.sort((a,b) => b-a);
    return score.reduce((profit,_,i)=> {
        if((i+1) % m === 0)
            profit += score[i]*m;
        return profit;
    },0)
}