/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
    
    let group = {};
    
    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        if (group[sortedStr]) {
            group[sortedStr].push(str); 
        } else {
            group[sortedStr] = [str];
        }
    });
    
    return Object.values(group);
};



