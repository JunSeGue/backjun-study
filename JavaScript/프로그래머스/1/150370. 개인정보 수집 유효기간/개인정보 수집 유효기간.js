function solution(today, terms, privacies) {
    const todayInt = today.split('.').map(Number);

    // reduce()를 사용해 terms를 객체로 변환
    const termMap = terms.reduce((acc, term) => {
        const [key, value] = term.split(' ');
        acc[key] = Number(value);
        return acc;
    }, {});

    return privacies
        .map((privacy, i) => {
            const [dateStr, termType] = privacy.split(' ');
            const dateInt = dateStr.split('.').map(Number);

            // 계약 기간 추가
            dateInt[1] += termMap[termType];

            // 연도 및 월 조정
            dateInt[0] += Math.floor((dateInt[1] - 1) / 12);
            dateInt[1] = (dateInt[1] - 1) % 12 + 1;

            return (dateInt[0] < todayInt[0] ||
                    (dateInt[0] === todayInt[0] && dateInt[1] < todayInt[1]) ||
                    (dateInt[0] === todayInt[0] && dateInt[1] === todayInt[1] && dateInt[2] <= todayInt[2]))
                ? i + 1
                : null;
        })
        .filter(Number); // `null` 값 제거
}
