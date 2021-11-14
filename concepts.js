/*
Problem 3:
Given a string s, return the sum of the vowels in the string 
if each vowel's weight increases by 1 according to the vowels order. 

Example:  
Input=  s: "Welcome to Indonesia", Vowels weight: a = 1, e = 2, i = 3, o = 4, u = 5  
Output = 22 (1 a's = 1*1 = 1 +  3 e's = 3*2 = 6 +  1 i's = 1*3 = 3 + 3 o's = 3*4 = 12)
*/

function sumVowels(s) {
    
    // used to validate a vowel. 
    let vowels = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true
    };

    // count the vowels.
    let countVows = {};
    for (let i = 0; i < s.length; i++) {
        
        // check if we don't have the vowel yet. 
        if (vowels[s[i]]) {
            if (!countVows[s[i]]) {
                countVows[s[i]] = 1; 
            } else {
                // increment the vowel count. 
                countVows[s[i]]++; 
            }
        }
    }

    let vowsWeight = {
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4, 
        'u': 5
    };

    let vowelSum = 0; 
    // iterate through the vowels that we counted, and calculate their weight.
    for (const key in countVows) {
        vowelSum += (countVows[key] * vowsWeight[key]);
    }

    return +vowelSum; 
}

console.log(sumVowels("Welcome to Indonesia"));