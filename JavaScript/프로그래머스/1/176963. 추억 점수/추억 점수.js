function solution(name, yearning, photos) {
    const resultMap = new Map();
    const answers = [];
    
    for(let i = 0 ; i< name.length; i++) {
        resultMap.set(name[i], yearning[i]);
    }
    
    for(const photo of photos) {
        let answer = 0;
        const keys = resultMap.keys();
        for(const key of keys) {
            const findPeople = photo.find(name => name === key);
            const result = resultMap.get(findPeople);
            if (result !== undefined) {
                answer += result;
        }
    }
        answers.push(answer);
    }
    return answers
}