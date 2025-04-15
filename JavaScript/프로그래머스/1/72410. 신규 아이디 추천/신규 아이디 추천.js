function solution(new_id) {
    var answer = '';
    const newId = new_id
    // 검사 과정
    // 1단계 소문자 치환
    const lowerId = newId.toString().toLowerCase();
    // 2단계 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 문자 제거
    const cleanString = lowerId.replace(/[^a-z0-9\-_\.]/g, '');
    // 3단계 4단계  마침표 2개이상 연속 시 하나로 통일
    answer = cleanString.split('.').filter(Boolean).join('.');
    // 5단계 new_id가 빈문자열일 경우에 a로 치환
    if(answer.trim() === "")
        answer = 'a';
    if(answer.length > 15)
        answer = answer.slice(0,15);
    if(answer.endsWith('.'))
        answer = answer.slice(0, -1);
    while(answer.length < 3)
        answer += answer[answer.length -1];
    
    return answer;
}