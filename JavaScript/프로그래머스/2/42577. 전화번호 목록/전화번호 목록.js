function solution(arr) {
    
   
    arr.sort();
    
    for(let i = 0; i<arr.length -1; i++ ) {
        if(arr[i+1].startsWith(arr[i])){
            return false;
        }
    }
    return true;
}