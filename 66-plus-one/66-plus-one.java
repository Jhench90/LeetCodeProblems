class Solution {
    public int[] plusOne(int[] digits) {
        int sum = 0;
        int carry = 0;
        
        for (int i = digits.length - 1; i >= 0; i--) {
           sum = digits[i] + 1;
           carry = 0;
           if (sum >= 10) {
               carry = 1;
               sum -= 10;
           }  
           digits[i] = sum;
           if (carry == 0) {
               break;
           }
       }
        if (carry == 1) {
            int[] newDigits = new int[digits.length + 1];
            newDigits[0] = 1;
            for (int i = 0; i < digits.length; i++) {
                newDigits[i+1] = digits[i];
                return newDigits;
            }
        }
       return digits;
    }
}

/*
class Solution {
    public int[] plusOne(int[] digits) {
        int carry = 0;
        int i = digits.length - 1;
        
        int sum = digits[i] + 1;
        if (sum >= 10) {
            carry = 1;
            while (carry == 1) {
                sum -=10;
                digits[i] = sum;
                i--;
                if (i < 0) break;
                sum = digits[i] + carry;
                carry = sum >=10 ? 1 : 0; 
            }
            
        } else { digits[i] = sum;}
         
        if (carry == 1) {
            int newDigits[] = new int[digits.length + 1];
            newDigits[0] = 1;
            for (int j = 0; j < digits.length; j++) {
                newDigits[j+1] = digits[j];
            }
            return newDigits;
        } 
        
        return digits;
    }
}
*/