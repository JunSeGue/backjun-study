function solution(x) {
    let answer = false;
    let strNumber = x.toString();
    let sum = strNumber.split('').map((str) => parseInt(str,10))
    .reduce((acc, curr) => acc + curr, 0);
    if(x % sum ==  0)
        answer = true;
    
    return answer;
}