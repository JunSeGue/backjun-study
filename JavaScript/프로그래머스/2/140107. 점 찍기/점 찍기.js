function solution(k, d) {
    let count = 0;
    for(let i =0; i<=d; i+=k){
        let maxX= Math.floor(Math.sqrt(d**2 - i**2));
        count += Math.floor(maxX / k) + 1;
    }
    return count;
}