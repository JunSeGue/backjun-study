function solution(s) {
    const map = new Map();
    const answer = [];
    
    for(let i=0; i<s.length; i++){
        const char = s[i];
        answer.push(map.has(char) ? i - map.get(char): -1);
        map.set(char, i)
    }
    
    return answer;
}