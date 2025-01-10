//n = 전체 스테이지 수
function solution(n, stages) {
    let answer = new Map();
    let fail = 0;
    let challenger = stages.length;
    // 실패율 = 클리어X / 클리어
    for (let i=1; i <= n; i++) {
        let clear = stages.filter(stage => stage > i).length;
        challenger = challenger - fail;
        fail = challenger - clear;
        let failRate = fail/challenger;
        answer.set(i, failRate);
    }
    let sortedArray = Array.from(answer).sort((a,b) => b[1]-a[1]) 
    let sortedKeys = sortedArray.map(item => item[0]);
    return sortedKeys;
}