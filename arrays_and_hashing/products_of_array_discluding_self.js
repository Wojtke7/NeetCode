// Bruteforce
class Solution_bruteforce {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            let product = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i == j) {
                    continue
                }
                else {
                    product *= nums[j];
                }
            }   
            result.push(product);
        }
        return result;
    }
}

// Efficient solution
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1
        let postfix = 1
        let output = []
        for (let i = 0; i < nums.length; i++) {
            output.push(prefix)
            prefix *= nums[i]
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= postfix
            postfix *= nums[i]
        }
        return output
    }
}

solve = new Solution()

nums = [1,2,3,4]
nums = [-1,0,1,2,3]

console.log(solve.productExceptSelf(nums));
