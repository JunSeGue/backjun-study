function solution(dots) {
    // 주어진 두 점의 기울기를 계산하는 함수
    function getSlope(point1, point2) {
        return (point2[1] - point1[1]) / (point2[0] - point1[0]);
    }

    // 가능한 모든 점 조합의 기울기를 확인하여 평행 여부 검사
    if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
    if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
    if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;

    return 0; // 평행하지 않은 경우
}
