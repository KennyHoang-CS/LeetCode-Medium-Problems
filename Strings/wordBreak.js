/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// https://leetcode.com/problems/word-break/

var wordBreak = function(s, wordDict) {
    
    const dp = new Array(s.length + 1).fill(false); 
    dp[0] = true; 
    
    let maxWordLen = 0; 
    for (let i = 0; i < wordDict.length; i++) {
        maxWordLen = Math.max(maxWordLen, wordDict[i].length);
    }
    
    for (let i = 0; i <= s.length; i++) {
        
        for (let j = i - 1; j >= 0; j--) {
            
            if (i - j > maxWordLen) continue;
            
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                dp[i] = true;
                break; 
            }
        }
    }
    
    return dp[s.length];
};
