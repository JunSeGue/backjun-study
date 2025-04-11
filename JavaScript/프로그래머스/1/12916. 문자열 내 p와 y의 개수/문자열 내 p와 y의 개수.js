function solution(s){
    let count = 0 ;
    const lowerString = s.toLowerCase();
    
    for (let char of lowerString) {
        if (char === "p") 
            count ++;
        else if (char === "y")
            count --;
    }
    
    return count === 0 ? true : false;
}