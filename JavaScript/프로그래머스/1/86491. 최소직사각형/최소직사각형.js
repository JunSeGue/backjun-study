function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    for(let [w, h] of sizes) {
        const [width, height] = w > h ? [w, h] : [h,w];
        
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }
    
    
    
    return maxWidth* maxHeight;
}