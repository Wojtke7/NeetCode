class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const n of numSet) {
            if (!numSet.has(n - 1)) {
                let length = 1;
                while (numSet.has(n + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}




nums = [2,20,4,10,3,4,5]
nums = [0,3,2,5,4,6,1,1]

solve = new Solution()
solve.longestConsecutive(nums)
