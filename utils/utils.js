const { default: axios } = require("axios");

const filterSuitableWords = async (stringInput) => {
    // retreive all english words
    let allWords = await axios.get(`http://norvig.com/ngrams/enable1.txt`)
    let boxSize = parseInt(stringInput[0])
    let letters = stringInput.substring(2)

    // get all possible words based off word length and letters provided
    let possibleWords = allWords.data
        .split("\n")
        .filter(word => {
            return word.length === boxSize && wordFromLetters(word, letters)
        })

    return possibleWords
}

const wordFromLetters = (word, letters) => {
    let lettersCopy = [...letters]
    let isWordOk = true
    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i]
        if (!lettersCopy.includes(currentLetter)) {
            isWordOk = false
            break
        }
        else {
            lettersCopy = lettersCopy.join("").replace(currentLetter, "").split("")
        }
    }
    return isWordOk
}

const getPrefixes = (prefix, suitableWords, prefixes) => {
    let results
    if (prefixes[prefix]) {
        results = prefixes[prefix]
    } else {
        prefixes[prefix] = suitableWords.filter(word => word.startsWith(prefix))
        results = prefixes[prefix]
    }
    return results
}

const sortAphabets = (text) => {
    return text.split('').sort().join('');
}

module.exports = { wordFromLetters, filterSuitableWords, getPrefixes, sortAphabets }