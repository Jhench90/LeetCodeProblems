class Solution {
    public int removeDuplicates(int[] nums) {
       //if nums length is zero, return 0
        if (nums.length == 0) { return 0; }
        //declare int k equals zero
        int k = 0;
        //declare int j equals k + 1
        
        //loop over nums array from j to end
        for (int j = k + 1; j < nums.length; j++) {
            if (nums[k] != nums[j]) {
                k++;
                nums[k] = nums[j];
            }
        }
        //if index k doesnt equal index j
        //increment k
        //set index k equal to index j
        //increment j
        
        //return k
        return k + 1;
    }
}

//[1, 2, 3, 4, 5, 4, 4, 5]
//             k            j