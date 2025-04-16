function solution(today, terms, privacies) {
    const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);

    // reduce()를 사용해 terms를 객체로 변환
    const termMap = Object.fromEntries(terms.map(term => {
        const [type, months] = term.split(' ');
        return [type, Number(months)];
    }));
    
    const isExpired = (dateStr, termType) => {
        let [year, month , day] = dateStr.split('.').map(Number);
        
        month += termMap[termType];
        
        year += Math.floor((month -1) / 12);
        month = month % 12 || 12;
        
        return (year < todayYear ||
               (year === todayYear && month < todayMonth) ||
               (year === todayYear && month === todayMonth && 
               day <= todayDay))
        
    };

    return privacies
        .map((privacy, i) => {
            const [dateStr, termType] = privacy.split(' ');
           return isExpired(dateStr, termType) ? i + 1 : null;
        })
        .filter(Number); // `null` 값 제거
}
