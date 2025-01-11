function solution(citations) {
    let hIndex= 0 ;
    let sortedArray = citations.sort((a,b) => b-a);
    
    for(let i=0; i<sortedArray.length; i++){
        if(sortedArray[i] >= i+1){
           hIndex = i+1;
        } else {
            break;
        }
    }
    return hIndex;
}

//refator code
function solution(citations) {
    citations.sort((a,b) => b - a );
    let hIndex = 0;
    
    citations.some((citation, index) => {
        if(citation >= index +1) {
            hIndex = hIndex +1;
            return false;
        } else {
            return true;
        }
    });
    return hIndex;
}