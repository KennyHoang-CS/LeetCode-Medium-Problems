/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    
    const N = matrix.length; 
    for (let i = 0; i < N; i++) {
        for(let j = i; j < N; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp; 
        }
    }
    
    for (let i = 0; i < N; i++) {
        let start = 0;
        let end = N - 1; 
        while (start < end) {
            let temp = matrix[i][start];
            matrix[i][start] = matrix[i][end];
            matrix[i][end] = temp; 
            ++start;
            --end; 
        }
    }
};