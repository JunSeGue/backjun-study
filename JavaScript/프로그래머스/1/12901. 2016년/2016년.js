function solution(a, b) {
    const answer = '';
    const days = ["SUN","MON","TUE","WED",
                  "THU","FRI","SAT"]
    const date = {
        1:31, 2:29, 3:31,
        4:30, 5:31, 6:30,
        7:31, 8:31, 9:30,
        10:31, 11:30, 12:31
    }
    
    let sum =0;
    for(let i = 1; i<a; i++) {
        sum += date[i];
    }
    sum += b + 4
    const index = sum % 7;
    
    
    return days[index];
}