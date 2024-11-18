class Solution {
    public String solution(String s) {

        int index = s.length()/2;
        
       return s.length()%2 == 1 ? s.substring(index, index+1) : s.substring(index-1, index+1);
           
    }
}