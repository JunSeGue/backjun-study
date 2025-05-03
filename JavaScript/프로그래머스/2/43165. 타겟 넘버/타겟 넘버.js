// // dfs
// function solution(numbers, target) {
//     let count =0;
    
//     function dfs (index, sum) {
//         if(index === numbers.length) {
//             if(sum === target) count++
//             return;
//         }
//         dfs(index + 1, sum + numbers[index]);
//         dfs(index + 1, sum - numbers[index]);
//     }
//     dfs(0,0)
//     return count;
// }


// bfs
function solution(numbers, target) {
    let count = 0;
    let queue = [[0, 0]]; // [현재 합계, 인덱스]

    for (let i = 0; i < numbers.length; i++) {
        let newQueue = [];

        for (let [sum, index] of queue) {
            newQueue.push([sum + numbers[index], index + 1]);
            newQueue.push([sum - numbers[index], index + 1]);
        }

        queue = newQueue; // 큐를 갱신하여 크기를 제한
    }

    return queue.filter(([sum, index]) => index === numbers.length && sum === target).length;
}