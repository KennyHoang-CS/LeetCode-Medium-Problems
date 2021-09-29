/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// https://leetcode.com/problems/4sum/

var fourSum = function(nums, target) {
    if (nums.length < 4) return [];
    if (nums.length == 4 && (nums[0] + nums[1] + nums[2] + nums[3]) == target) return [nums];
    let N = nums.length, result = []; 
    nums.sort((a, b) => a - b); 
    
    console.log(nums)
    
    for (let a = 0; a < N - 3; a++) {
        if (a > 0 && nums[a - 1] == nums[a]) continue; 
            
        for (let b = a + 1; b < N - 2; b++) {
            
            if (b > a + 1 && nums[b - 1] == nums[b]) continue; 
            
            let left = b + 1;
            let right = N - 1; 
                       
            while (left < right) {
                
                let sum = nums[a] + nums[b] + nums[left] + nums[right];
                
                if (sum == target) {
                    result.push([nums[a], nums[b], nums[left], nums[right]])
                    while (left < right && nums[left] == nums[left + 1]) ++left; 
                    while (left < right && nums[right] == nums[right - 1]) --right;
                    ++left;
                    --right; 
                } else if (sum > target) {
                    --right; 
                } else {
                    ++left; 
                }
            }
        }
    }
    
    return result; 
};

