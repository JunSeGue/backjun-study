function solution(number, k) {
    let count = k;
    let stack = [];
    
    
    for(let i = 0; i < number.length; i++) {
        let current = number[i];
        while (stack.length > 0 && count > 0 && stack[stack.length -1] < current ){
            stack.pop();
            count--;
        }
        stack.push(current);
    }

    stack = stack.slice(0, stack.length - count).join('');
    return stack;
}