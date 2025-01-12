/*
function solution(nums) {
    // maxValue === nums/2;
    // 가장 많이 가져갈 수 있는 종류의 수 (경우의 수 아님)
    let set = new Set();
    let max = nums.length/2;
    for(let num of nums) {
        set.add(num);
    }
    return set.size >= max ? max: set.size;
}
*/

// refacotriong code

function solution(nums) {
    let set = new Set(nums);
    let max = nums.length/2;

    return set.size >= max ? max: set.size;
}
