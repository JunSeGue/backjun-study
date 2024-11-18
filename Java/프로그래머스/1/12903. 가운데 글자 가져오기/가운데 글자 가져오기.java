class Solution {
    public String solution(String s) {
        String answer = "";
        int index = s.length()/2;
        
        if(s.length()%2 == 1){
            answer = s.substring(index, index+1);
           
        } else {
            answer = s.substring(index-1, index+1); 
        }
        
        return answer;
    }
}