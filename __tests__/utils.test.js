const { expect } = require("@jest/globals");
const { wordFromLetters, getPrefixes } = require("../utils/utils");

describe('wordFromLetters()', () => {
    test('return true when word can be made form letters', () => {
        const word = "done"
        const letters = "aaccdeeeemmnnnoo"
        let answer = wordFromLetters(word, letters)
        expect(answer).toBe(true)
    });
    test('return false when word cannot be made form letters', () => {
        // used two Ds, where as letters only has one
        const word = "dada"
        const letters = "aaccdeeeemmnnnoo"
        let answer = wordFromLetters(word, letters)
        expect(answer).toBe(false)
    });
});

describe('getPrefixes', () => {
    test('should only return words with correct starting letters', () => {
        const words = [
            "anna",
            "moan",
            "mode",
            "meno"
        ]

        const prefixes = {}

        let expected = [
            "moan",
            "mode"
        ]
        let actual = (getPrefixes("mo", words, prefixes))
        expect(expected).toEqual(actual)
    });
    test('should keep a record of words with a prefix after it has found them once', () => {
        const words = [
            "anna",
            "moan",
            "mode",
            "meno"
        ]

        const prefixes = {}

        let expected = [
            "moan",
            "mode"
        ]
        expect(prefixes["mo"]).toBe(undefined)
        getPrefixes("mo", words, prefixes)
        expect(prefixes["mo"]).toEqual(expected)
    });
});


