// function solution(a, b) {
//     let answer = 0;
//     let minValue ;
//     const sub = Math.abs(a-b);
//     if (a === b)
//         return  a;
//     else if (a <  b){
//         minValue = a; 
//     }else {
//         minValue = b;
//     }
//     for (let i = minValue; i<=minValue+sub; i++ ) {
//         answer += i
//     } 
//     return answer;
// }

function solution(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return ((max - min + 1) * (min + max)) / 2;
}

