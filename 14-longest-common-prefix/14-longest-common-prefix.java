class Solution {
    public String longestCommonPrefix(String[] strs) {
       //strs length is 0, return empty string
        if (strs.length == 0) {
            return "";
        }
        //set prefix as first elem of strs
        String prefix = strs[0];
        
        //iterate from index 1 to end of strs
        for (int i = 1; i < strs.length; i++) {
            String word = strs[i];
            while (word.indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);        
            }
            if (prefix.length() == 0) {
                return "";
            }
            
        }
        // check if each string contains prefix
        //if not
        //while the string does not contain prefix
        //cut off the last character of the prefix
        //if prefix length is ever 0, return empty string
        
        //return the prefix
        return prefix;       
    }    
}
