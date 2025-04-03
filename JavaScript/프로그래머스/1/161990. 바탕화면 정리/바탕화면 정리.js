function solution(wallpaper) {

    let [minX, minY, maxX, maxY] 
    = [Infinity, Infinity, -Infinity, -Infinity]
   
    wallpaper.forEach((row, i) => {
        for (let j = 0; j < row.length; j++) {
            if (row[j] === "#") {
                minX = Math.min(minX, i);
                minY = Math.min(minY, j);
                maxX = Math.max(maxX, i + 1);
                maxY = Math.max(maxY, j + 1);
            }
        }

   })

    return [minX, minY, maxX, maxY];
}