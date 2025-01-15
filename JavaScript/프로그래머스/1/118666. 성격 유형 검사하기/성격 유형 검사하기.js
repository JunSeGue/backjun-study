function solution(survey, choices) {
    const scores = {
        'R': 0, 'T': 0, 'C': 0, 'F': 0,
        'J': 0, 'M': 0, 'A': 0, 'N': 0
    };
    
    const scoreMap = [3, 2, 1, 0, 1, 2, 3];
   
    survey.forEach((s, idx) => {
        const [disagreeType, agreeType] = s.split('');
        const choice = choices[idx];
        if (choice < 4) {
            scores[disagreeType] += scoreMap[choice - 1];
        } else if (choice > 4) {
            scores[agreeType] += scoreMap[choice - 1]; 
        } 
    });
    
    const result = [];
    result.push(scores['R'] >= scores['T'] ? 'R' : 'T');
    result.push(scores['C'] >= scores['F'] ? 'C' : 'F');
    result.push(scores['J'] >= scores['M'] ? 'J' : 'M');
    result.push(scores['A'] >= scores['N'] ? 'A' : 'N');
   
    return result.join('');
}