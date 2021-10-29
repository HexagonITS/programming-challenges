import phoneticPassword from '../challenges/02-phonetic-password'

const allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789+#_-'
const invalidTestCharacters = '-/>.$~=*?'

test('generates an array of characters', () => {
    const arr = phoneticPassword(allCharacters)
    expect(Array.isArray(arr)).toBe(true)
    expect(arr.length).toBe(allCharacters.length)

    const nonStringValues = arr.map(val => typeof val !== 'string')
    expect(nonStringValues).toEqual([])
})

test('does not change lowercase letters', () => {
    const lowercase = allCharacters.substring(0, 26)
    const arr = phoneticPassword(lowercase)
    expect(arr).toEqual(lowercase.split(''))
})

test('does not change numbers', () => {
    const numbers = allCharacters.substring(26, 36)
    const arr = phoneticPassword(lowercase)
    expect(arr).toEqual(numbers.split(''))
})

test('adds captial before uppercase letters', () => {
    const uppercase = allCharacters.substring(0, 26).toUpperCase()
    const arr = phoneticPassword(uppercase)

    const answer = uppercase.split('').map(char => 'capital ' + char.toLowerCase())
    expect(arr).toEqual(answer)
})

test('handles symbols', () => {
    const symbols = allCharacters.substring(36)
    const arr = phoneticPassword(symbols)
    const answer = ['plus', 'pound', 'underscore', 'dash']
    expect(arr).toEqual(answer)
})

test('throws for invalid characters', () => {
    for(const char in invalidTestCharacters) {
        expect(() => {
            phoneticPassword('abc' + char + '123')
        }).toThrowError(Error)
    }
})