function solution(num) {
    let number = num
    let count = 0;
    while (number  !== 1 && count < 500){
        if(number % 2 ===0 ) {
           number = number /2
        } else {
            number = number *3 +1;
        }
        count ++;
    }
    
    return count === 500 ? -1 : count;
}