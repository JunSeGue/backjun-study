function solution(arr) {
    if (arr.length === 1)
        return [-1];
    
    const minValue = Math.min(...arr);
    const answer = arr.filter(num => num !== minValue);
    
    return answer;
}