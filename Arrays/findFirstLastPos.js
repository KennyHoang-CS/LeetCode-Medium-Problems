/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function(nums, target) {
    return [findFirstPos(nums, target), findLastPos(nums, target)];
};

function findFirstPos(nums,target) {
    let left = 0;
    let right = nums.length-1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target && nums[mid - 1] != target) {
            return mid; 
        } else if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;  
        }
    }
    
    return -1;
}
   
function findLastPos(nums, target) {
    
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target && (nums[mid + 1] != target)) {
            return mid;
        } else if (nums[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1; 
        }
    }
    
    return -1;
}


    