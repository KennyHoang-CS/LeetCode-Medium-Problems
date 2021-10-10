/**
 * @param {string} s
 * @return {string}
 */

// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function(s) {
    
    if (s.length < 2) {
        return s; 
    }
    let max = ''; 
    
    for (let i = 0; i < s.length; i++) {
        let left = checkPali(i, i, s);
        let right = checkPali(i, i + 1, s); 
        let current = left.length >= right.length ? left : right;
        max = current.length > max.length ? current : max; 
    }
    
    return max; 
};   

function checkPali(left, right, s) {
    let temp = ''; 
    
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        temp = s.substring(left, right + 1);
        left -= 1;
        right += 1; 
    }
    
    return temp; 
}
