function solution(ingredient) {
    let answer = 0;
    let stack = [];
    
    for (let i = 0; i < ingredient.length; i++) { 
        stack.push(ingredient[i]);
        
        if(ingredient.length >=4){
            let size = stack.length;
            if(stack[size - 4] === 1 &&
                stack[size - 3] === 2 &&
                stack[size - 2] === 3 &&
                stack[size - 1] === 1) {
                for(let j = 0; j<4; j++) {
                    stack.pop();
                }
                answer++;
            }
        }
     
    } 
    return answer;
}