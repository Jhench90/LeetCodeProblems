class Solution {
    public boolean isPalindrome(int num) {
      ArrayList<Integer> destructured = new ArrayList<Integer>();
        if (num < 0) {
            return false;
        }
        if (num == 0) {
            return true;
        }
        int original = num;
        int remainder = 0;
        while (num != 0) {
            remainder = num % 10;
            destructured.add(0, remainder);
            num /= 10;
        }
        int i = 0;
        while (i <= destructured.size()/2) {
            System.out.println("i is: " + i);   
            if (destructured.get(i) != destructured.get(destructured.size() - i - 1)) {
                   return false;
               }
            i++;
        }            
        return true;
    }
}

// class Solution {
//     public boolean isPalindrome(int num) {
//         if(num < 0) return false;
//         int reversed = 0, remainder, original = num;
//         while(num !=0) {
//             remainder = num % 10;
//             reversed = reversed * 10 + remainder;
//             num /= 10;
//         }
//         return original == reversed;
//     }
// }