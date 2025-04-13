function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for (let i =0; i <schedules.length; i++) {
        const limitTime = getLimitTime(schedules[i]);
        let day = startday;
        
        
        for (const timelog of timelogs[i]) {
            if (isWeekend(day)){
                day++;
                continue;
            }
            if (timelog > limitTime) break;
            day++;
        }
        if(day === startday +7) {
            answer++;
        } 
    }
    return answer;
}

const getLimitTime = (time) => {
    time += 10;

    let hour = Math.floor(time / 100);
    let minute = time % 100;
        
    if (minute >= 60) {
        return (hour + 1) * 100 + (minute - 60);
    }
    return time;
}

const isWeekend = (day) => {
    const dayOfWeek = day % 7;
    return dayOfWeek === 0 || dayOfWeek === 6;
}