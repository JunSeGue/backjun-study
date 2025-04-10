// function solution(n) {
    
//     let answer = n.toString().split('').map(Number);
//     return Number(answer.sort((a, b) => b-a).join(''));
 
// }

function solution(n) {
    return Number([...n.toString()].sort((a, b) => b - a).join(''))
}