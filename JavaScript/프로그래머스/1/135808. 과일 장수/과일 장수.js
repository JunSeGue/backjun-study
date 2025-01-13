function solution(k, m, score) {
    let result = 0;
    score.sort((a,b) => b - a);
    for(let i=0; i<= score.length-m; i+=m) {
        let minValue = score[i+m-1];        
        result += minValue *m;
    }
    return result
}