class Solution {
    public static int strStr(String haystack, String needle) {
        
      int ans = -1;
      for (int i = 0; i < haystack.length(); i++) {
          int j = 0;
          while (haystack.charAt(i + j) == needle.charAt(j)) { // a == a
              if (j == needle.length() - 1) { // 0 != 2
                 return i;
              }
              if (i + j == haystack.length() - 1) {
                 return -1;
              }
              j++; //1
          }
      }     
      return ans;
    }
}