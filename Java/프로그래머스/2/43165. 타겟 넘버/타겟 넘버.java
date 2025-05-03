// import java.util.LinkedList;
// import java.util.Queue;


// class Solution {
//     private static class State {
//         int sum , index;

//         State(int sum , int index) {
//         this.sum = sum;
//         this.index = index;
//         }
//     }   

//     public int solution(int[] numbers, int target) {
//         int count = 0;
//         Queue<State> queue = new LinkedList<>();
//         queue.add(new State(0, 0));
        
//         while(!queue.isEmpty()) {
//             State current = queue.poll();
                        
//             if(current.index == numbers.length) {
//                 if(current.sum == target) count++;
//                 continue;
//             }
//             queue.add(new State(current.sum + numbers[current.index], current.index +1));
//             queue.add(new State(current.sum - numbers[current.index], current.index +1));
//         }        
//         return count;
//     }

// }


// dfs
class Solution {
    public int solution (int[] numbers, int target) {
        return dfs(numbers, target, 0, 0);
    }
    
    private int dfs (int[] numbers, int target, int index, int sum){
        
        if (index == numbers.length) {
            return (sum == target) ?  1: 0;
        }
        return dfs(numbers, target, index +1, sum + numbers[index]) 
            + dfs(numbers, target, index +1, sum - numbers[index]);
    }
}