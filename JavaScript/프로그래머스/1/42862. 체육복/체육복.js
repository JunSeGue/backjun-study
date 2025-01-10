function solution(n, lost, reserve) {
    
    let students  = new Array(n).fill(1);
        
    for (let lostPerson of lost) {
        students[lostPerson -1]--;
    }
    for (let reservePerson of reserve){
        students[reservePerson -1] ++;
    }
    
    for(let i =0; i< n; i++){
        if(students[i] === 0) {
            if(i> 0 && students[i-1] === 2) {
                students[i]++;
                students[i-1] --;
            } else if(i<n-1 && students[i+1] ===2){
                students[i]++;
                students[i+1]--;
            }
        }
    }
    
    let result = students.filter(student => student > 0).length;
    return result
}