function solution(absolutes, signs) {

    return absolutes.reduce((sum, current, i) => sum += current * (signs[i]? 1 : -1 ), 0);
    
}