// function solution(numbers) {

//     let sortedStr = numbers.map(number => number.toString()).sort((a,b) => b.localeCompare(a)).reduce((acc, curr) => acc+curr, '');
    
//     return sortedStr;
// }

function solution(numbers) {
    
    let result = numbers.map(String).sort((a,b) => (b+a) - (a+b)).reduce((acc,curr) => acc +curr, '');
    
    if(result[0] === "0") {
        return "0";
    }
    
    return result;
    
  
}