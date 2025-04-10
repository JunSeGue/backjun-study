function solution(n) {
    
    let answer = n.toString().split('').map(Number);
    return Number(answer.sort((a, b) => b-a).join(''));

}