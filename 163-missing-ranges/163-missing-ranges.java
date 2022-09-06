class Solution {
    public List<String> findMissingRanges(int[] nums, int lower, int upper) {
        
        //declare answer array
        List<String> answer = new ArrayList<>();
        
        //edge case
        if (nums.length == 0) { 
            answer.add(helper(lower, upper));
            return answer; 
        }
        
        //check lower bound against first value of array
        int left = lower;
        int right = nums[0] - 1;
        if (left <= right) {
            answer.add(helper(left, right));
        }
        
        //check the array
        for (int i = 0; i < nums.length - 1; i++) {
            left = nums[i] + 1;
            right = nums[i+1] - 1;
            if (left <= right) {
                answer.add(helper(left, right));
            }
        }
        
        //check last val of array against upper bound
        left = nums[nums.length - 1] + 1;
        right = upper;
        if (left <= right) {
            answer.add(helper(left, right));
        }
        
        //return the answer
        return answer;
    }
    
    //helper function to return the string format
    private String helper(int left, int right) {
        if (left == right) {
            return String.valueOf(left);
        }
        return left + "->" + right;
    }  
}