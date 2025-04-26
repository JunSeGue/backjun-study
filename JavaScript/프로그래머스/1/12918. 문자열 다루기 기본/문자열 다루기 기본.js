function solution(s) {
    let answer = false;
    const regix = /^[0-9]+$/;
    if(s.length === 4 || s.length === 6) {
        answer = regix.test(s);
    }
    return answer;
}