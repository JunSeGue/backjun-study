function solution(survey, choices) {
    const scores = {
        'R': 0, 'T': 0, 'C': 0, 'F': 0,'J': 0, 'M': 0, 'A': 0, 'N': 0
    };
    
    const scoreMap = [3, 2, 1, 0, 1, 2, 3];
   
    survey.forEach((pair, idx) => {
        const [disagreeType, agreeType] = pair.split('');
        const choice = choices[idx];
        scores[choice < 4 ? disagreeType : agreeType] += scoreMap[choice-1];
    });
    
    return ['RT', 'CF','JM', 'AN'].map(pair => 
        scores[pair[0]] >= scores[pair[1]] ? pair[0] : pair[1]).join('');
    }
