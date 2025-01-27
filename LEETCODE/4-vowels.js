// input a sentence and display the word of the sentence that contains maximum number of vowels.
// Sample Input: HAPPY NEW YEAR
// Sample Output: The word with maximum number of vowels: YEAR

const prompt = require("prompt-sync")();

function maxVowels(userInput) {
    const words = userInput.split(" ");

    function countVowels(word) {
        const vowels = "aeiou";
        word = word.toLowerCase();
        let count = 0;

        for (let char of word) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }

    let maxVowelCount = 0;
    let wordWithMaxVowels = "";

    for (let word of words) {
        const vowelCount = countVowels(word);
        if (vowelCount > maxVowelCount) {
            maxVowelCount = vowelCount;
            wordWithMaxVowels = word;            
        }
    }

    return wordWithMaxVowels
}

let userInput = prompt("the sentence is ")
console.log(maxVowels(userInput));

