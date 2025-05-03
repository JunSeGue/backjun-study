import java.util.LinkedList;
import java.util.Queue;


class Solution {
    public int solution(int[] numbers, int target) {
        int count = 0;
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{0,0});
        
        while(!queue.isEmpty()) {
            int[] current = queue.poll();
            int sum = current[0];
            int index = current[1];
            
            if(index == numbers.length) {
                if(sum == target) count++;
                continue;
            }
            queue.add(new int[] {sum + numbers[index], index+1});
            queue.add(new int[] {sum - numbers[index], index+1});
        }        
        return count;
    }
}