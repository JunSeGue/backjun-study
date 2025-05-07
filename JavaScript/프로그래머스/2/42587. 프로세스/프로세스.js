function solution(priorities, location) {
    let queue = priorities.map((priority, index)=> [index, priority]);
    let count = 0;
        
    while (queue.length > 0) {
        let currentProcess = queue.shift();
        let hasHigherPriority = queue.some(process => process[1] > currentProcess[1]);
        
        if(hasHigherPriority) {
          queue.push(currentProcess);  
        } else {
            count++;
            if(currentProcess[0] === location) return count;
        }
    }
} 