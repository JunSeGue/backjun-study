function solution(n, arr1, arr2) {
    let answer = [];
       
    for (let i = 0; i<n; i++) {
        const binaryArr = (arr1[i] | arr2[i]).toString(2).padStart(n, "0");
        const str = binaryArr.replace(/[1-9]/g, "#").replace(/[0]/g, " ");
        answer.push(str)
        
    }
    return answer;
}