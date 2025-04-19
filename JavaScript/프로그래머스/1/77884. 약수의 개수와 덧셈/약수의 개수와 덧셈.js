// function solution(left, right) {
//     let answer = 0;
//     for(let i=left; i<=right; i++){
//         let count = 0;
//         for(let j=1; j*j <= i; j++){
//             if(i % j === 0) {
//                 count++;
//                 if(j !== i/j) count++;
//             }
//         }
        
//         answer += count % 2 === 0 ? i : -i;
//     }
    
//     return answer;
// }

// 완전 제곱수 일 경우 제곱근 갯수 홀수
function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i<= right; i++) {
        let sqrt = Math.sqrt(i);
        answer += (sqrt === Math.floor(sqrt)) ? -i : i;
    }
    return answer;
}