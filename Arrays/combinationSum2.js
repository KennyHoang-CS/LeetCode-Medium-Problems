/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// https://leetcode.com/problems/combination-sum-ii/

var combinationSum2 = function(candidates, target) {
    
    candidates = candidates.sort((a, b) => a - b);
    const output = []; 
    const visited = new Array(candidates.length).fill(false); 
    
    function dfs(current, currentSum, startIndex, visited) {
      
        if (currentSum > target) {
            return; 
        }
        if (currentSum == target) {
            output.push([...current]);
            return; 
        }
        
        for(let i = startIndex; i < candidates.length; i++) {
            
            if(i > 0 && candidates[i] == candidates[i - 1] && !visited[i - 1]) {
                continue;
            }
            visited[i] = true;
            dfs([...current, candidates[i]], currentSum + candidates[i], i + 1, visited); 
            visited[i] = false; 
        }
    }
    dfs([], 0, 0, visited);
    
    return output; 
};
