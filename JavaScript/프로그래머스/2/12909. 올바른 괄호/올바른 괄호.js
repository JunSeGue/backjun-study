function solution(s) {
    let stack = [];

    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (stack.length){
             stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0; // 스택이 비어 있으면 올바른 괄호
}