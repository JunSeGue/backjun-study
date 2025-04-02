function solution(a, b) {
    const answer = '';
 const weekDays = ["SUN", "MON", "TUE", "WED", 
                   "THU", "FRI", "SAT"];
    const monthDays = [31, 29, 31, 30, 31, 30, 
                       31, 31, 30, 31, 30, 31];
    
    // let sum =0;
    // for(let i = 1; i<a; i++) {
    //     sum += monthDays[i];
    // }
    // sum += b + 4
    
    const sum = monthDays
    .slice(0, a-1)
    .reduce((acc, days) => acc + days, 0) + b + 4;
    
    return weekDays[sum % 7];
}