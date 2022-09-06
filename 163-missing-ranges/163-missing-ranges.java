class Solution {
    public List<String> findMissingRanges(int[] nums, int lower, int upper) {
        
        
        
        //declare answer array
        List<String> answer = new ArrayList<>();
        
        if (nums.length == 0) { 
            answer.add(helper(lower, upper));
            return answer; 
        }
        
        int left = lower;
        int right = nums[0] - 1;
        if (left <= right) {
            answer.add(helper(left, right));
        }
        
        for (int i = 0; i < nums.length - 1; i++) {
            left = nums[i] + 1;
            right = nums[i+1] - 1;
            if (left <= right) {
                answer.add(helper(left, right));
            }
        }
        
        left = nums[nums.length - 1] + 1;
        right = upper;
        if (left <= right) {
            answer.add(helper(left, right));
        }
        
        return answer;
        
    }
    private String helper(int left, int right) {
        if (left == right) {
            return String.valueOf(left);
        }
        return left + "->" + right;
    }
    //helper
        //if right less than left, dont push
        //if left equal to right, only push a single number
        //if left less than right, make a string range and push it   
}