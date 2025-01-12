function solution(nums) {
    // maxValue === nums/2;
    // 가장 많이 가져갈 수 있는 종류의 수 (경우의 수 아님)
    let set = new Set();
    for(let num of nums) {
        set.add(num);
    }
    if(set.size >= nums.length/2)
        return nums.length/2
    else {
        return set.size;
    }
   
}