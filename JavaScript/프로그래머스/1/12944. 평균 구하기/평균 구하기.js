function solution(arr) {
    let sum = arr.reduce((acc,value)=> acc + value, 0);
    return sum/arr.length;
}