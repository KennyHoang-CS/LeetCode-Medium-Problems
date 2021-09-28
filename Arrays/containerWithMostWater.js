/**
 * @param {number[]} height
 * @return {number}
 */
// https://leetcode.com/problems/container-with-most-water/
var maxArea = function(height) {
    
    let max = Number.MIN_VALUE; 
    let i = 0;
    let j = height.length - 1; 
    
    while (i < j) {
        let min = Math.min(height[i], height[j]);
        max = Math.max(max, min * (j - i));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--; 
        }
    }
    
    return max; 
};