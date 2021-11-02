/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// https://leetcode.com/problems/permutations-ii/

var permuteUnique = function(nums) {
    let result = [];
    let visited = new Array(nums.length).fill(false);
    nums.sort((a, b) => a - b); 
    
    function backtracking(perms = [], visited) {
        
        if (perms.length == nums.length) {
            result.push([...perms]);
            return; 
        }
        
        for (let i = 0; i < nums.length; i++) {
            
            if (visited[i] || (i > 0 && (nums[i - 1] == nums[i] && !visited[i - 1]))) {
                continue; 
            }
            
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