/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// https://leetcode.com/problems/permutations/

var permute = function(nums) {
    
    let result = [];
    let visited = new Array(nums.length).fill(false);
    
    function backtracking(perms = [], visited) {
        
        if (perms.length == nums.length) {
            result.push([...perms]);
            return; 
        }
        
        for (let i = 0; i < nums.length; i++) {
            
            if (!visited[i]) {
                
                // make a choice
                visited[i] = true; 
                perms.push(nums[i]);
                // recursion
                backtracking(perms, visited); 
                // undo choice
                visited[i] = false; 
                perms.pop();
            }
        }
    }
    backtracking([], visited);
    
    return result;
};