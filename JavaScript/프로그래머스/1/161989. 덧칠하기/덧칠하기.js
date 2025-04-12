function solution(n, m, section) {
    let end = 0;
    let count = 0;    
    for (let start of section) {
        if (start > end) {
            count ++;
            end = start + m-1;
        }
            
    }
    
    return count;
}