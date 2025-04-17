function solution(a, b) {
    return a.reduce((acc, current , index) => 
     acc += current * b[index], 0)

}