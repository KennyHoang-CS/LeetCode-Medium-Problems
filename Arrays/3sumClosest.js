/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/3sum-closest/

var threeSumClosest = function(nums, target) {
    
    let result = nums[0] + nums[1] + nums[nums.length - 1];
    nums = nums.sort((a,b) => a - b); 
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1; 
        let right = nums.length - 1; 
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            
            if (sum > target) {
                --right;
            } else {
                ++left; 
            }
          
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum; 
            }
        }
    }
    
    return result;
};

