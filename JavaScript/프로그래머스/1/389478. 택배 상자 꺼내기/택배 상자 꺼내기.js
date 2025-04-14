function solution(n, w, num) {
    let limitY = Math.ceil(n / w);
    let targetY = Math.ceil(num / w);
    
    if (limitY === targetY) return 1;

    const isLimitReverse = limitY % 2 === 0;
    const isTargetReverse = targetY % 2 === 0;

    let limitX = n % w === 0 ? w: n % w;
    let targetX = num % w === 0 ? w : num % w;
    
    const isSameReverse = isTargetReverse === isLimitReverse;
    const isTargetFarther = limitX >= targetX;
    console.log(isTargetFarther);
    const isTargetCloser = w - limitX <= targetX;
    
    const result = limitY - targetY;

    return isSameReverse
        ? (isTargetFarther ? result + 1 : result)
        : (isTargetCloser ? result + 1 : result);
}
