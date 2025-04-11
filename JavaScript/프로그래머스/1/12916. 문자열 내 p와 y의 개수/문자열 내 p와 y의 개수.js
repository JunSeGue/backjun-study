// function solution(s){
//     let count = 0 ;
//     const lowerString = s.toLowerCase();
    
//     for (let char of lowerString) {
//         if (char === "p") 
//             count ++;
//         else if (char === "y")
//             count --;
//         else
//             continue;
//     }
    
//     return count === 0 ? true : false;
// }

function solution (s){
    const countP = [...s.toLowerCase()].filter(char => char === 'p').length;
    const countY = [...s.toLowerCase()].filter(char => char === 'y').length;
    return countP === countY
}