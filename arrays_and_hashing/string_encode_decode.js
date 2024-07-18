class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "EMPTY";
        var string = ''
        for (let word of strs) {
            string += word + ' '
        }

        return string.slice(0, string.length - 1);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "EMPTY") return []
        var arr = []
        let pointer = 0
        for (var i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                let new_str = str.slice(pointer, i)
                arr.push(new_str)
                pointer = i + 1
            } 
        }
        const last_str = str.slice(pointer, str.length)
        arr.push(last_str)
        return arr
    }
}


solve = new Solution()
const input = []
const enccoded = solve.encode(input)
console.log(`Encoded:        ${enccoded}`)

const decoded = solve.decode(enccoded)
console.log(`Decoded:        ${decoded}`)
console.log(decoded)