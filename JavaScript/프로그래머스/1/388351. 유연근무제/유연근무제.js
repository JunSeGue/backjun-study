function solution(schedules, timelogs, startday) {
    let answer = 0;
    
    for (let i =0; i <schedules.length; i++) {
        const timelog = timelogs[i];
        const schedule = getSchedule(schedules[i]);
        let day = startday;
        
        
        for (let t of timelog) {
            if (day % 7 === 0 || day % 7 === 6) {
                day++;
                continue;
            }
            if (t > schedule) {
                break;
            }
            day++;
        }
        if(day === startday +7) {
            answer++;
        } 
    }
    return answer;
}

const getSchedule = (schedule) => {
    schedule += 10;
        
    if (schedule % 100 >= 60) {
        let h = Math.floor(schedule / 100) + 1;
        let m = (schedule % 100) - 60;
        schedule = (h*100)+m;
    }
    return schedule;
}