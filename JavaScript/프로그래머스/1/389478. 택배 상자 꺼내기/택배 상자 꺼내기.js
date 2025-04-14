function solution(n, w, num) {
    let limitY = Math.ceil(n / w);
    let targetY = Math.ceil(num / w);
    
    if (limitY === targetY) return 1;

    let limitX = n % w || w;
    let targetX = num % w || w;
    
    const isSameReverse = (limitY % 2) === (targetY % 2);
    const isTargetFarther = limitX >= targetX;
    const isTargetCloser = w - limitX <= targetX;
    
    const result = limitY - targetY;

    return isSameReverse
        ? (isTargetFarther ? result + 1 : result)
        : (isTargetCloser ? result + 1 : result);
}
