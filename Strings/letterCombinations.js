/**
 * @param {string} digits
 * @return {string[]}
 */

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
    
    if (digits === '') return []; 
    if (digits.length === 1) return letters[digits];
    
    let q = [""]; 
    
    for (let i = 0; i < digits.length; i++) {
        
        let digit = digits[i];
        let N = q.length; 
        for (let j = 0; j < N; j++) {
            
            let lookup = letters[digit]; 
            let data = q.shift(); 
            for (let k = 0; k < lookup.length; k++) {
           
                let newData = data + lookup[k];
                q.push(newData);
            }
        }
    }
    
    return q; 
};