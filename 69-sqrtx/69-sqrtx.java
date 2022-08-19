class Solution {
    public int mySqrt(int x) { //8
        if (x < 2) return x;
        
        long num;
        int pivot, left = 2, right = x / 2;
        while (left <= right) {
            pivot = left + (right - left) / 2;
            num = (long)pivot * pivot;
            if (num > x) right = pivot - 1;
            else if (num < x) left = pivot + 1;
            else return pivot;
        }
        return right;
    }
}

/* time limit exceeded
class Solution {
    public int mySqrt(int x) {
        int count = 0;
        int ans = -1;
        
        while (ans == -1) {
            count++;
            if (count * count == x) {
                ans = count;
            }
            if (count * count > x) {
                ans = count - 1;
            }
        }
        return ans;   
        
        //declare count is 0
        //declare ans is null
        
        //iterate from 0 upwards until ans is not null
        //increment count
        //if count times count equals x
        //return count
        //if count times count > x
        //return count - 1
    }
}
*/