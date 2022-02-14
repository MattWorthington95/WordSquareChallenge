const { wordSquare } = require("..");
jest.setTimeout(30000);

describe('wordSqaure() returns expected word square based of given input on challenge spec', () => {
    test('returns correct word square for "4 aaccdeeeemmnnnoo"', async () => {
        const actual = await wordSquare("4 aaccdeeeemmnnnoo")
        const expected = [['moan', 'once', 'acme', 'need']]
        expect(actual).toEqual(expected)
    });
    test('returns correct word square for "5 aaaeeeefhhmoonssrrrrttttw" ', async () => {
        const actual = await wordSquare("5 aaaeeeefhhmoonssrrrrttttw")
        const expected = [['feast', 'earth', 'armor', 'stone', 'threw']]
        expect(actual).toEqual(expected)
    });
    test('returns correct word square for "5 aabbeeeeeeeehmosrrrruttvv" ', async () => {
        const actual = await wordSquare("5 aabbeeeeeeeehmosrrrruttvv")
        const expected = [['heart', 'ember', 'above', 'revue', 'trees']]
        expect(actual).toEqual(expected)
    });
    test('returns correct word square for "7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy" ', async () => {
        const actual = await wordSquare("7 aaaaaaaaabbeeeeeeedddddggmmlloooonnssssrrrruvvyyy")
        const expected = [
            [
                'bravado',
                'renamed',
                'analogy',
                'valuers',
                'amoebas',
                'degrade',
                'odyssey'
            ]
        ]
        expect(actual).toEqual(expected)
    });
})