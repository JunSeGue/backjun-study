function solution(name, yearning, photos) {
    const map = new Map();
    
  for(let i=0; i<name.length; i++){
        map.set(name[i], yearning[i])
    }
    
    return photos.map((arr)=> {
        let sum = 0;
        arr.forEach((v) => {
            sum += map.get(v)?map.get(v) : 0
        })
        return sum;
    });
      
}