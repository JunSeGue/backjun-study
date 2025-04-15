function solution(k, d) {
    // k는 기울기 , d 는 distance의 최댓값
    let count = 0;
    for(let i =0; i<=d; i+=k){
        // 해당 Y좌표에서 가질 수 있는 최대 X값의 좌표
        let maxX= Math.floor(Math.sqrt(d**2 - i**2));
        // 원점을 포함한 각 좌표에 조건에 만족시 카운트 업
        count += Math.floor(maxX / k) + 1;
    }
    return count;
}