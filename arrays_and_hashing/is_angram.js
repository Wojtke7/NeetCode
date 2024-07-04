class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length!== t.length) {
            return false;
        }

        // Create a frequency map for both strings
        const mapS = {}
        const mapT = {}
        const splitted_s = s.split("")
        for (let letter of splitted_s) {
            if (letter in mapS) {
                mapS[letter] += 1;
            }
            else {
                mapS[letter] = 1
            }
        }
        
        const splitted_t = t.split("")
        for (let letter of splitted_t) {
            if ((letter in mapS) == false) {
                console.log("End because letters don't correspond")
                return false
            }
            if (letter in mapT) {
                mapT[letter] += 1;
            }
            else {
                mapT[letter] = 1
            }
        }

        for (let letter in mapS) {
            if (mapS[letter] === mapT[letter]) {
                continue
            }
            else {
                console.log("End because amount of letters don't correspond")
                return false
            }
        }

        return true
    }
}

s = "racecar", t = "carrace"
// s = "maj", t = "jam"

solve = new Solution();
console.log(solve.isAnagram(s, t)) 