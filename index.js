const { filterSuitableWords, getPrefixes, sortAphabets } = require("./utils/utils");


const wordSquare = async (input) => {

    // obtain all the possible words, based off the number and letters provided
    const suitableWords = await filterSuitableWords(input)

    const result = []

    // object that will store history prefix words so we can find easier in the future
    const prefixes = {}

    //recursive funtion to trial and error words
    const trailAndError = (idx, curr) => {

        // base case
        if (curr.length == curr[0].length) {
            result.push([...curr])
            return
        }

        // build prefix depding what level we are on
        let prefix = ""
        for (let i = 0; i < curr.length; i++) {
            prefix += curr[i][idx]
        }
        // get a list of words with needed prefix
        let prefixWords = getPrefixes(prefix, suitableWords, prefixes)

        //trial all the prefixWords
        prefixWords.forEach(candidate => {
            // try current prefix word
            curr.push(candidate)
            // call recursive function again, this time looking at the next index and with updated curr
            trailAndError(idx + 1, curr)
            // if we didnt find a match, pop the candidate off curr array
            curr.pop()
        })
    }



    // loop through all suitable words and begin the trial and error process
    suitableWords.forEach(word => {
        let currentWordInArray = [word]
        trailAndError(1, currentWordInArray)
    })

    // trail and error function doesnt take into account the avaible letters, just the word, need to fix this
    let amendedResult


    result.forEach(wordSquare => {
        let wordSquareWord = wordSquare.join("")
        let asortedWordSquareWord = sortAphabets(wordSquareWord)
        let asortedInput = sortAphabets(input.substring(2))
        //ensure that every word square inside amendedResult can actually be made with letters provided
        if (asortedInput == asortedWordSquareWord)
            amendedResult = [wordSquare]
    })

    console.log(amendedResult);

    return amendedResult
}

// wordSquare("4 aaccdeeeemmnnnoo")
// wordSquare("5 aaaeeeefhhmoonssrrrrttttw")
// wordSquare("5 aabbeeeeeeeehmosrrrruttvv")
// wordSquare("7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy")

module.exports = { wordSquare }


