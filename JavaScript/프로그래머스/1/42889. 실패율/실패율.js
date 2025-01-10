//n = 전체 스테이지 수
function solution(n, stages) {
    let result = [];
    // 실패율 = 클리어X / 클리어
    for (let i=1; i <= n; i++) {
        let clear = stages.filter(stage => stage >= i).length;
        let fail = stages.filter(stage => stage === i).length;
        result.push([i,fail/clear]);
    }
     result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}