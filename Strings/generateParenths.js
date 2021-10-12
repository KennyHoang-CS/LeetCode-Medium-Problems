/**
 * @param {number} n
 * @return {string[]}
 */

// https://leetcode.com/problems/generate-parentheses/

var generateParenthesis = function(n) {
    const result = []; 
    backtracking(result, "", 0, 0, n);
    return result; 
};

function backtracking(array, current_string, open, close, max) {
    
    if (current_string.length == max * 2) {
        array.push(current_string);
        return; 
    }
    if (open < max) {
        backtracking(array, current_string + '(', open + 1, close, max); 
    }
    if (close < open) {
        backtracking(array, current_string + ')', open, close + 1, max);
    }    
}






