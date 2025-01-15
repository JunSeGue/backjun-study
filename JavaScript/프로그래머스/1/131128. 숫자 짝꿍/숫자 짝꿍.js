function solution(X, Y) {
    const countX = new Array(10).fill(0);
    const countY = new Array(10).fill(0);
    
    for(const digit of X) {
        countX[digit]++;
    }
    for (const digit of Y) {
        countY[digit]++
    }
    
    let result = '';
    for(let i = 9; i>=0; i--){
        const commonCount = Math.min(countX[i], countY[i]);
        result += i.toString().repeat(commonCount);
    }
    
    if(result === '') {
        return "-1";
    }
    if(result[0] === '0') {
        return  "0";
    }
    return result;
}