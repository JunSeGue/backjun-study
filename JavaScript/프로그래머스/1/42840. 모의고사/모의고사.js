// function solution(answers) {
    
//     let first = [ 1, 2, 3, 4, 5 ];
//     let second = [ 2, 1, 2, 3, 2, 4, 2, 5 ];
//     let third = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 ];
    
//     let scores = [0,0,0]
        
//     answers.forEach((answer,index)=> {
        
//         if(answer === first[index % first.length]) scores[0]++;
//         if(answer === second[index % second.length]) scores[1]++;
//         if(answer === third [index % third.length]) scores[2]++;
//     });
    
//     const maxScore = Math.max(...scores);
//     let result = [];
//     scores.forEach((score,index)=> {
//         if(score === maxScore) result.push(index+1)
//     })
//     return result;
// }

// code refactoring
function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],                    // 1번 수포자의 패턴
        [2, 1, 2, 3, 2, 4, 2, 5],           // 2번 수포자의 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]      // 3번 수포자의 패턴
    ];
    let scores = patterns.map(pattern => 
        // answers.filter((answer,index) => 
        //     answer === pattern[index % pattern.length]).length);
        answers.reduce((score, answer, index) =>
            score + (answer === pattern[index % pattern.length]?1:0),0
        )
    );
    
    const maxScore = Math.max(...scores);
    
    // return scores
    //     .map((score, index) => (score === maxScore ? index+1 : null))
    //     .filter(index => index !== null));
    
    return scores.flatMap((score, index)=> score === maxScore ? index+1 : []);
}
