/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function(nums, target) {
    
    if (nums.length == 1 && nums[0] == target) return 0; 
    
    let left = 0;
    let right = nums.length - 1; 
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1; 
        } else {
            right = mid; 
        }
    }
    
    let start = left; 
    right = nums.length - 1; 
    left = 0; 
    
    if (target >= nums[start] && target <= nums[right]) {
        left = start;
    } else {
        right = start; 
    }
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;  
        }
    } 
    
    return -1;
};
