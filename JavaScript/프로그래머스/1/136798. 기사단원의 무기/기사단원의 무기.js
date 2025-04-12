function solution(number, limit, power) {
    let sum = 0;
    
    for (let i = 1; i <= number; i++){
        let count = getDivsiorCount(i);
        
        sum += count <= limit ? count : power;
    }
    return sum;
}

function getDivsiorCount(n) {
    let count = 0;
    
    for(let i = 1; i*i <= n; i++) {
            if(n % i === 0) {
                count++;
                if(i !== n / i)
                    count++;
            }
        }
    return count;
}