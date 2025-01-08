import java.util.*;
class Solution {
    public int solution(int[][] board, int[] moves) {
        int result = 0;
        Deque <Integer> stack = new ArrayDeque <> ();      
        
        for(int move : moves){
            int panIndex = move-1;
            int dollNumber = 0;
            
            for(int i=0; i<board.length; i++){
                if(board[i][panIndex] != 0 ){
                    dollNumber = board[i][panIndex];
                    board[i][panIndex] = 0;
                    break;
                }
            }
            if(dollNumber == 0 ) continue;
            
            if(stack.isEmpty()) {
                stack.push(dollNumber);
            } else{
                if(stack.peek() == dollNumber){
                    stack.pop();
                    result += 2;
                } else {
                    stack.push(dollNumber);
                }
            }
        
        }
        return result;
    }
}