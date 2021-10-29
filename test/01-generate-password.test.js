import generatePassword from '../challenges/01-generate-password'

test('generates a string', function () {
    expect(typeof generatePassword(10)).toBe('string')
})

test('doesnt break with 0 length', function () {
    expect(generatePassword(0).length).toBe(0)
})

test('generates the appropriate length', function () {
    expect(generatePassword(5).length).toBe(5)
    expect(generatePassword(10).length).toBe(10)
    expect(generatePassword(20).length).toBe(20)
    expect(generatePassword(50).length).toBe(50)
    expect(generatePassword(100).length).toBe(100)
})

test('generates unique passwords', function () {
    const pass1 = generatePassword(100)
    const pass2 = generatePassword(100)
    expect(pass1).not.toEqual(pass2)
})

test('generates the appropriate characters', function () {
    const foundCharacters = {}
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+#_-'
    for(const char in characters) {
        foundCharacters[char] = false
    }

    for(var i = 0; i < 20; i++) {
        //Generate a ton of passwords. Shouldn't miss any characters hopefully.
        var gen = generatePassword(100)
        expect(gen).toEqual(expect.not.stringMatching(new RegExp('[^' + characters + ']')))

        for(const char in gen) {
            foundCharacters[char] = true
        }
    }

    for(const char in characters) {
        expect(`character ${char} in output: ${foundCharacters[char]}`).toEqual(`character ${char} in output: ${true}`)
    }
})