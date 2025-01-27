/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    words.sort()
    let validSet = new Set()
    let res = ""

    for (let word of words) {
        if (word.length === 1 || validSet.has(word.slice(0, -1))) {
            validSet.add(word)

            if (res.length < word.length) {
                res = word
            }
        }
    }
    return res
};