function solution(citations) {
    let answer= 0 ;
    let sortedArray = citations.sort((a,b) => b-a);
    for(let i=0; i<sortedArray.length; i++){
        if(sortedArray[i] >= i+1){
           answer = i+1;
        }
    }
    return answer;
}