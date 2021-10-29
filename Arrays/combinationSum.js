/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// https://leetcode.com/problems/combination-sum/

var combinationSum = function(candidates, target) {
    
    const output = [];
    
    function backtracking(targetRemain, combs, start) {
       
        if (targetRemain < 0) {
            return; 
        }
        if (targetRemain === 0) {
            output.push([...combs]);
            return; 
        }
        
        for (let i = start; i < candidates.length; i++) {
            backtracking(targetRemain - candidates[i], [...combs, candidates[i]], i);
        }
    }
    backtracking(target, [], 0)
    
    return output; 
};


