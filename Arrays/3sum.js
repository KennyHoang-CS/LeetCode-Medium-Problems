/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// https://leetcode.com/problems/3sum/

var threeSum = function(nums) {
    
    nums = nums.sort((a, b) => a - b);
    
    let results = []; 
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i - 1] == nums[i]) continue; 
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                results.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] == nums[left + 1]) ++left;
                while (left < right && nums[right] == nums[right - 1]) --right; 
                ++left;
                --right; 
            } else if (sum > 0) {
                --right;
            } else {
                ++left; 
            }
        }
    }
    
    return results;
};