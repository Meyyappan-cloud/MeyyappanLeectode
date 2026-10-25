class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int flag = 1;
        for (int i = 1; i < nums.length; i++){
            if (nums[i] != nums[flag-1]) {
                nums[flag] = nums[i];
                flag++;
            }
        }
        return flag;
    }
}