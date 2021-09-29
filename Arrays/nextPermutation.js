/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// https://leetcode.com/problems/next-permutation/

var nextPermutation = function(nums) {
    
    let size = nums.length - 1;  
    let pivot = 0; 
    let flag = true; 
    
    // find pivot point. 
    for (let i = size; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            pivot = i; 
            break; 
        }
    }
    
    // if pivot is still 0, then num elements are in descending order. 
    if (pivot == 0) {
        nums.sort((a, b) => a - b); 
        flag = false; 
    }
    
    if (flag) {
        let swap = size;
        while (nums[pivot - 1] >= nums[swap]) {
            --swap; 
        }

        // do the swap.
        [nums[swap], nums[pivot - 1]] = [nums[pivot - 1], nums[swap]];
                
        // sort the elements from pivot point to end of array.
        nums = reverse(pivot, nums);
    }
};

function reverse(idx, nums) {
    let start = idx, end = nums.length - 1;
    
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        ++start;
        --end; 
    }
}




