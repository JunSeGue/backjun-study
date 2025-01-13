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
    
    score.sort((a,b) => b-a);       // 내림차순 정렬
    
    return score.reduce((profit,_,i)=> {
        if((i+1) % m === 0)         // 각 상자의 최솟값 찾기
            profit += score[i]*m;   // 이익 계산
        return profit;
    },0)
}